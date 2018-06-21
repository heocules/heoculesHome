

var express = require('express');
var http = require('http');
var static = require('serve-static');
var path = require('path');

var bodyParser = require('body-parser'); // post 방식일때




var app = express();

app.set('port',process.env.PORT || 3000); 
app.use('/public',static(path.join(__dirname,'public')));

app.use(bodyParser.urlencoded({extended:false})); // post 방식일때
app.use(bodyParser.json()); // post 방식일때



var router = express.Router();

router.route('/process/test')
    .post(function(req,res){
    
    console.log('post 함수 실행');
    
    var paramId = req.body.id || req.query.id;
    var paramPassword = req.body.password || req.query.password;
    
    res.writeHead(200, {"Content-Type":"text/html;charset=utf8"});
    res.write("<h1>서버에서 로그인 응답</h1>");
    res.write("<div><p>" + paramId + "</p></div>");
    res.write("<div><p>" + paramPassword + "</p></div>");
    res.end();
    
    
})   .get(function(req,res){
    
    console.log('get 함수 실행');
    
    var paramId = req.body.id || req.query.id;
    var paramPassword = req.body.password || req.query.password;
    
    res.writeHead(200, {"Content-Type":"text/html;charset=utf8"});
    res.write("<h1>서버에서 로그인 응답</h1>");
    res.write("<div><p>" + paramId + "</p></div>");
    res.write("<div><p>" + paramPassword + "</p></div>");
    res.end();
    
})
    .put(function(req,res){
    console.log('put 함수 실행');
})
    .delete(function(req,res){
    console.log('delete 함수 실행');
    
});



app.use('/', router);

app.all('*',function(req,res){
    res.status(404).send('<h1>요청하신 페이지는 없습니다.</h1>');
})


var server = http.createServer(app).listen(app.get('port'),function(){
    console.log('익스프레스로 웹 서버를 실행함 : ' + app.get('port'));
    
});












