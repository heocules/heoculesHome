var http = require('http');
var fs = require('fs');

var server = http.createServer();

var host = 'localhost';
var port = 3000;

server.listen(port,host,50000,function(){
    
    console.log('웹서버 세팅됨.');

});

server.on('connection',function(socket){
    
    console.log('클라이언트가 접속했습니다.');
    
});

server.on('request', function(req,res){
   
    console.log('클라이언트 요청이 들어왔습니다.');
  //  console.dir(req);
    var filename = 'eye.png';
    fs.readFile(filename, function(err,data){
        res.writeHead(200, {"Content-Type":"image/png"}); // 헤더 정보 출력
        res.write(data);
        res.end();
    });
 
});