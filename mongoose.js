var insert = function(){
    
        var room = new Room();
    
        room.title = req.body.title;
        room.ageMin = req.body.ageMin;
        room.ageMax = req.body.ageMax;
        //room.regDate = new Date(req.body.publishes_date);
        room.gender = req.body.gender;
        room.price = req.body.price;
        room.openUrl = req.body.openUrl;
        room.intro = req.body.explain;
        
        room.save(function(err){
            if(err){
                
                console.error(err);
                res.json({result:0});
                return;
            }
            
            res.json({result:1});*
        
        res.json({statusCode :'200' , statusMsg : 'success'});
        })
            
}


var delete  = function(res,req){
     Room.remove({title : req.params.roomId},function(err,output){
                if(err) return res.status(500).json({error:"database failure"});
                if(!output.result.n) return res.status(404).json({error:'room not found'});
                res.json({message:"book deleted"});
               
                res.status(204).end();
        })
}
\
var find = function(res){

  Room.find(function(err,rooms){
            
         //   if(err) return res.status(500).send({error:'database failure'});
      res.json({statusCode :'200' , statusMsg : 'success', total :'2' ,
                      resultList:json,(rooms));
    })
}

var update = function(res){
     Room.findById(req.params.roomId,function(err,room){
            if(err) return res.status(500).json({error:'database failure'});
            if(!room) return res.status(404).json({error : 'book not found'});
            
            if(req.body.title) room.title = req.body.title;
            if(req.body.ageMin) room.ageMin = req.body.ageMin;
            if(req.body.ageMax)room.ageMax = req.body.ageMax;
            //room.date = new Date(req.body.publishes_date);
            if(req.body.sex) room.sex = req.body.sex;
            if(req.body.price) room.price = req.body.price;
            if(req.body.openUrl) room.openUrl = req.body.openUrl;
            if(req.body.explain) room.explain = req.body.explain;
            
            room.save(function(err){
                if(err) res.status(500).json({error:'failed to update'});
                res.json({message : 'room updated'});
            })
    

    })
}

