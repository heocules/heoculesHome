//static 미들웨어
//특정 폴더의 파일들을 특정 패스로 접근할 수 있도록 열어주는 역할을 함.

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


app.use(function(req, res, next){
    console.log('첫번째 미들웨어 호출됨.');

    var userAgent = req.header('User-Agent');
    var paramId = req.body.id || req.query.id; // host 방식 || get 방식
      
    res.send('<h3>서버에서 응답. User-Agent ->' + userAgent + '</h3> <h3>Pram Name ->  '+ paramId + '</h3>');
});



var server = http.createServer(app).listen(app.get('port'),function(){
    console.log('익스프레스로 웹 서버를 실행함 : ' + app.get('port'));
    
});