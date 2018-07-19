var Room = require('./room');

var rodule = {};

rodule.insert = function(){
    var room = new Room();
    
        room.title = 'hi';
        room.ageMin = 123213;
        room.ageMax = 123123;
        //room.regDate = new Date(req.body.publishes_date);
        room.gender = 12;
        room.price = 12;
        room.openUrl = 'ad';
        room.intro = 'asdf';
        
        room.save(function(err){
            if(err){
                
                console.error(err);
                console.log(json({result:0}));
                return;
            }
            
            console.log('result:1');
        
        console.log('result:1');
        })
            
            
}

rodule.delete = function(res,req){
     Room.remove({title : 'hi'},function(err,output){
                
        })
}

rodule.find = function(res){

  Room.find(function(err,result){
            
         //   if(err) return res.status(500).send({error:'database failure'});
   console.log(result);
    })
}

rodule.update = function(){
    //     Room.findById({},function(err,room){
    Room.findOneAndUpdate({title:'hi'},'modified',function(err,room){

          
            room.title = 'modified';
            room.ageMin = 111111111;
            room.ageMax = 111111111;
            //room.date = new Date(req.body.publishes_date);
            room.sex = 1111111111;
            room.price = 111111111;
            room.openUrl = 'modified';
            room.explain = 'modified';
            
            room.save(function(err){
                if(err) console.log('update error');
            })
    

    })
}

module.exports = rodule;

