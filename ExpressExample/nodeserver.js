

var express = require('express');
var http = require('http');
var static = require('serve-static');
var path = require('path');

var bodyParser = require('body-parser'); // post 방식일때

var Member = require('./member');


var app = express();

app.set('port',process.env.PORT || 3000); 
app.use('/public',static(path.join(__dirname,'public')));

app.use(bodyParser.urlencoded({extended:false})); // post 방식일때
app.use(bodyParser.json()); // post 방식일때



var router = express.Router();

//======member/member==========router 설정
//get
//post

router.route('/members/member')
    .get(function(req,res){
        //member DB에서 회원 정보 모두 가저오기
        console.log('get 함수 실행' + i);
    
        Member.find(function(err, member) {
        if (err){
            res.send(err);
        }
           
        res.json(member);


})
    .post(function(req,res){
        //member 생성
        console.log('post 함수 실행' + i);
        
        var member = new Member();      // create a new instance of the Bear model
        
        member.id = req.body.name; 
    
        member.save(function(err) {
            if (err){
                  res.send(err);
            }
            
            res.json({ message: 'Bear created!' });
        });

    
})

    
    
    
//======member/member/:id ==========router 설정
//get
//put
//delete
router.route('/members/member/:id') 
   .get(function(req,res){
    console.log('싱글 get 함수 실행');
        //member DB에 :id 정보 가저오기
    
    Member.findById(req.params.id, function(err, member) {
            if (err)
                res.send(err);
            res.json(member);
        });
    });
})

   .put(function(req,res){
    console.log('put 함수 실행');
        //member DB에 회원 정보 update
    
        Member.findById(req.params.id, function(err, member) {

            if (err)
                res.send(err);

            member.name = req.body.id;  // update the bears info

            // save the bear
            member.save(function(err) {
                if (err)
                    res.send(err);
                
                res.json({ message: 'member updated!' });
                
            });
    
})
    .delete(function(req,res){
        //member DB에 회원 삭제
        console.log('delete 함수 실행');
        
        Member.remove({
            _id: req.params.id
        }, function(err, member) {
            if (err)
                res.send(err);

            res.json({ message: 'Successfully deleted' });
        });
    
    //  res.send(roomlist);    
})
    

app.use('/', router);

app.all('*',function(req,res){
    res.status(404).send('<h1>요청하신 페이지는 없습니다.</h1>');
})


var server = http.createServer(app).listen(app.get('port'),function(){
    console.log('익스프레스로 웹 서버를 실행함 : ' + app.get('port'));
    
});








