//db connect (local)
var mongoose = require('mongoose');
var Room = require('./room');
var rodule = require('./dbModule');

var database;
var roomSchema;

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/mongo_test');
database = mongoose.connection;

database.on('open',function(){
    console.log('database connect' + 'mongodb://localhost:27017/mongo_test');
});
  database.on('disconnected',function() {
        console.log('disconnected.');
    });
    
    database.on('error',console.error.bind(console,'mongoose connect error'));
//user shcema create

//database/room/insert()

//insert(req,res);  

//rodule.insert();

//database room get
//rodule.find();

//update
rodule.update();
//database room get
rodule.find();

///delete

//user schema delete

//database room get

