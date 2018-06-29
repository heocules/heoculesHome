
var express = require('express');
var http = require('http');
var static = require('serve-static');
var path = require('path');
var bodyParser = require('body-parser');
var expressSession = require('express-session');
var expressErrorHandler = require('express-error-handler');
var mongoose = require('mongoose');

var database;
var RoomSchema;
var UserModel;

function connectDB(){
    var databaseUrl = 'mongodb://localhost:27017/local';
    mongoose.Promise = global.Promise;
    mongoose.connect(databaseUrl);
    database = mongoose.connection;
    
    database.on('open', function() {
        console.log('데이터베이스에 연결됨 : ' + databaseUrl);
        
        
        RoomSchema = mongoose.Schema({
    
            title : string,
            ageMin : Number,
            ageMax : Number,
            date : Number,
            sex : Number,
            price : Number,
            openUrl : String,
            explain : String          
        });
        
        console.log('RoomSchema 정의함.');
        
        RoomModel = mongoose.model('rooms', RoomSchema);
        console.log('RoomModel 정의함.');
    });
    
    database.on('disconnected',function() {
        console.log('데이터베이스 연결 끊어짐.');
    });
    
    database.on('error',console.error.bind(console,'mongoose 연결 에러'));
}

var app = express();

app.set('port',process.env.PORT || 3000);
app.use('/room',static(path.join(__dirname,'public')));

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
app.use(cookieParser());



var router = express.Router();


var errorHandler = expressErrorHandler({
    static:{
        '404': './public/404.html'
    }
});

app.use(expressErrorHandler.httpError(404));
app.use(errorHandler);
var server = http.createServer(app).listen(app.get('port'), function(){
    console.log('익스프레스 웹 서버를 실행함' + app.get('port'));
    connectDB();
});