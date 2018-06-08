//cookie , session
//cookie는 클라이언트 웹 브라우저에 저장되는 정보, 세션은 웹 서버에 저장되는 정보

var express = require('express');
var http = require('http');
var static = require('serve-static');
var path = require('path');

var bodyParser = require('body-parser'); // post 방식일때
var cookieParser = require('cookie-parser'); //cookie 외장 모듈 불러오기
var expressSession = require('express-session');

var multer = require('multer');
var fs = require('fs');
var cors = require('cors'); //다중 서버접속


var app = express();
//미들 웨어 등록
app.set('port',process.env.PORT || 3000); 
app.use('/public',static(path.join(__dirname,'public')));
app.use('/uploads',static(path.join(__dirname,'uploads')));

app.use(bodyParser.urlencoded({extended:false})); // post 방식일때
app.use(bodyParser.json()); // post 방식일때

app.use(cookieParser());

app.use(expressSession({
        secret:'my key',
        resave:true,
        saveUninitialized:true
        }));

app.use(cors());

var storage = multer.diskStorage({
    
    destination:function(req,file,callback){
        callback(null,'uploads'); //데스티네이션 폴더 (uploads)
    },
    filename:function(req,file,callback){
      //  callback(null,file.originalname + Date.now());
        //업로드 할때 파일명 설정
        var extension = path.extname(file.originalname); //확장자 빼내기
        var basename = path.basename(file.originalnmae,extension);  // ' . ' 뺀 나머지 파일네임
        callback(null, basename + Date.now() + extension);
        
     }
});

var upload = multer({
    storage:storage,
    limits:{
        files:10,
        fileSize:1024*1024*1024
    }

});

var router = express.Router();

router.route('/process/photo').post(upload.array('photo',1),function(req,res){
    console.log('/process/photo 라우팅 함수 호출됨.');
    
    var files = req.files;
    console.log('====== 업로드된 파일 ======');
    
    if(files.length >0 ){ 
        console.dir(files[0]);
    }else{
        console.log('파일 없습니다.');
    }
    
    var originalname;
    var filename;
    var mimetype;
    var size;

    //파일이 맞는지 여부 확인
    if(Array.isArray(files)){
        for(var i=0;i<files.length;i++){
            originalname = files[i].originalname;
            filename = files[i].filename;
            mimetype = files[i].mimetype;
            size = files[i].size;
            
        }
    }
    
    res.writeHead(200, {"Content-Type":"text/html;charset=utf8"});
    res.write("<h1>파일 업로드 성공</h1>");
    res.write("<p>원본파일 : " + originalname + "</p>");
    res.write("<p>저장파일 : " + filename + "</p>");
    res.end();

});




var router = express.Router();
router.route('/process/product').get(function(req,res){
    console.log('/process/product 라우팅 함수 호출됨.');
    
    //product.html 페이지에서 세션 정보가 없으면 로그인 페이지로 이동하라
    if(req.session.user){
        res.redirect('/public/product.html');
    }else{
        res.redirect('/public/login2.html');
    }
});




router.route('/process/login').post(function(req,res){
    
    console.log('/process/login 라우팅 함수 호출됨.');
    
    var paramId = req.body.id || req.query.id;
    var paramPassword = req.body.password || req.query.password;
    console.log('요청 파라미터 : ' + paramId + ', ' + paramPassword);
    
    if(req.session.user){
        console.log('이미 로그인되어 있습니다.');
    
        res.redirect('/public/product.html');
    }else{
        req.session.user = {
            id:paramId,
            name:'소녀시대',
            authorized:true
        };
        
        res.writeHead(200,{"Content-Type":"text/html;charset=utf8"});
        res.write('<h1>로그인 성공 </h1>');
        res.write('<p>Id : '+ paramId + '</p>');
        res.write('<br><br><a href="/process/product"> 상품 페이지로 이동하기</a>');
        res.end();
    }
    
});


router.route('/process/logout').get(function(req,res){
    
    console.log('/process/logout 라우팅 함수 호출됨.');
    
    if(req.session.user){
        console.log('로그아웃합니다.');
        req.session.destroy(function(err){
            if(err){
                console.log('세션 삭제시 에러 발생.');
                return;
            }
            
            console.log('세션 삭제 성공.');
            res.redirect('/public/login2.html');
            
        });
    }else {
        console.log('로그인되어 있지 않습니다.');
        res.redirect('/public/login2.html');
    }
});






router.route('/process/setUserCookie').get(function(req,res){
    console.log('/process/setUserCookie 라우팅 함수 호출됨.');
    
    res.cookie('user',{
        id:'mike',
        name:'소녀시대',
        authorized : true
    });
    
    res.redirect('/process/showCookie');
    
});

router.route('/process/showCookie').get(function(req,res){
    console.log('/process/showCookie 라우팅 함수 호출됨/');
    
    res.send(req.cookies);
});

router.route('/process/login').post(function(req,res){
    
    console.log('/process/login 라우팅 함수에서 받음');
    
    var paramId = req.body.id || req.query.id;
    var paramPassword = req.body.password || req.query.password;
    
    res.writeHead(200, {"Content-Type":"text/html;charset=utf8"});
    res.write("<h1>서버에서 로그인 응답</h1>");
    res.write("<div><p>" + paramId + "</p></div>");
    res.write("<div><p>" + paramPassword + "</p></div>");
    res.end();
    
});



app.use('/', router);

app.all('*',function(req,res){
    res.status(404).send('<h1>요청하신 페이지는 없습니다.</h1>');
});


var server = http.createServer(app).listen(app.get('port'),function(){
    console.log('익스프레스로 웹 서버를 실행함 : ' + app.get('port'));
    
});




