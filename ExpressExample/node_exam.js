var path = require('path');
var express = require('express');
var http = require('http');
var app = express();
var static = require('serve-static');
var bodyParser = require('body-parser');
var router = express.Router();

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

/* Member CRUD */

/* http://192.168.219.100:3000/member/registerMember */
router.route('/member/registerMember').post(function(req, res) {
    console.log('post create resousce to DB');        
    var paramId = req.body.id
    var paramPassword = req.body.password 
    
    /* TODO ... write err code */
    
    //res.writeHead(200, {"Content-Type":"text/html;charset=utf8"});
    //res.end();   
    console.log(paramId + ' ' + paramPassword);        
});

/* http://192.168.219.100:3000/member/getPassword?id=dlgmlals3 */
router.route('/member/getPassword').get(function(req, res) {
    console.log('get search && getting resource from DB');        
    var paramId = req.query.id;
    console.log(paramId);   
    
    /* TODO ... write password */
    
    //var person = {name:'dlgmlals', age:21};
    //res.writeHead(200, {"Content-Type":"application/json"})
    //res.write(person);
    //res.end(); 
});

/* http://192.168.219.100:3000/member/updateInfo */
router.route('/member/updateInfo').put(function(req, res) {
    console.log('put update resource to DB');        
    var paramId = req.body.id;
    var paramPassword = req.body.password;
    console.log(paramId + ' ' + paramPassword);    
    
    /* TODO ... write err code */
});

/* http://192.168.219.100:3000/member/deleteMember */
router.route('/member/deleteMember').delete(function(req, res) {
    console.log('delete reousrce from DB');        
    var paramId = req.body.id;
    console.log(paramId);
    
    /* TODO ... write err code */
});

app.use('/', router);

app.set('port', process.env.PORT || 3000);
var server = http.createServer(app).listen(app.get('port'), function(){
    console.log('express webser execute' + app.get('port'));
});