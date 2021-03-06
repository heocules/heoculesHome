var express =require('express');
var http = require('http');
var static = require('serve-static');
var path = require('path');

var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var expressSession = require('express-session');
var expressErrorHandler = require('express-error-handler');


var user = require('./routes/user');

var config = require('./config');

var database_loader = require('./database/database_loader');

var route_loader = require('./routes/route_loader');

//암호화모듈
var crypto = require('crypto');



var app = express();
//미들웨어 등록

console.log('config.server_port -> ' + config.server_port);
app.set('port', config.server_port || 3000);

app.use('/public',static(path.join(__dirname,'public')));

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

app.use(cookieParser());

app.use(expressSession({
    secret:'my key',
    resave:true,
    saveUninitialized:true
}));



/*

function createUserSchema(database) {
    
     database.user_schema = require('./database/user_schema').createSchema(mongoose);
    
    UserModel = mongoose.model('users3',database.UserSchema);
    console.log('UserModel 정의함.');
}

*/

route_loader.init(app, express.Router());



var errorHandler = expressErrorHandler({
    static:{
        '404': './public/404.html'
    }
});

app.use(expressErrorHandler.httpError(404));
app.use(errorHandler);
var server = http.createServer(app).listen(app.get('port'), function(){
    console.log('익스프레스 웹 서버를 실행함' + app.get('port'));
    database_loader.init(app, config);
});