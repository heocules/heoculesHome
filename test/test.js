//db connect (local)
var mongoose = require('mongoose');
var rodule = require('./dbModule');
var async = require('async');
var database;
var roomSchema;


var tempReq = {
    body: {
        title: 'hi1',
        ageMin: 123213,
        ageMax: 123123,
        date: 111111111,
        gender: 12,
        price: 12,
        openUrl: 'ad',
        explain: 'asdfasdf'
    }
}

var modifiedReq = {
    params : {
        roomId: 'hi1'
    },
    body: {
        _id : '',
        title: 'hi1',
        ageMin: 111111111,
        ageMax: 111111111,
        date: 111111111,
        gender: 11111111,
        price: 111111111,
        openUrl: 'modified',
        explain: 'modified'
    }
}

var res = {

};

 var tempRoom = new Object();
//console.log(tempReq.body.title);
//console.log(modifiedReq.params.roomId);
//user shcema create


async.series([
        function(callback) {
            setTimeout(function() {
                mongoose.Promise = global.Promise;
                mongoose.connect('mongodb://localhost:27017/mongo_test', {
                    useNewUrlParser: true
                });
                database = mongoose.connection;

                database.on('open', function() {
                    console.log('database connect ' + 'mongodb://localhost:27017/mongo_test');
                });
                database.on('disconnected', function() {
                    console.log('disconnected.');
                });

                database.on('error', console.error.bind(console, 'mongoose connect error'));
                callback(null, 'dbconnect');
            }, 100);
            
        },
        function(callback) {
            setTimeout(function() {
                console.log('----------------- insert -------------------');
                rodule.insertRoom(tempReq, res);
                callback(null, 'insert success');
            }, 2000);


        },
        function(callback) {
            setTimeout(function() {
                tempRoom = rodule.getRoomList();
                callback(null, 'get success');
            }, 2000);

        },
      function(callback) {
            setTimeout(function() {
                console.log('*********1111111111111***********+'+ tempRoom +'**********************');
                callback(null, 'get success');
            }, 2000);

        },


        function(callback) {
            setTimeout(function() {
                console.log('----------------- update -------------------');
            //    rodule.updateRoom(modifiedReq, res);
                console.log('fake update');
                callback(null, 'update success');
            }, 2000);


        },
        function(callback) {
            setTimeout(function() {
                rodule.getRoomList();
                callback(null, 'get success');
            }, 2000);


        },

        function(callback) {
            setTimeout(function() {
                console.log('----------------- delete -------------------');
                rodule.deleteRoom(modifiedReq, res);
                callback(null, 'delete success');
            }, 2000);

        },
        function(callback) {
            setTimeout(function() {
                rodule.getRoomList();
                callback(null, 'get success');
            }, 2000);

        }
    ],
    function(err, results) {
        if (err) {
            console.log(err);
        }
        console.log('----------------- async results  -------------------');
        console.log(results);
    });
//user schema delete

//database room get