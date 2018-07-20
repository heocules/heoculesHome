var Room = require('./room');
var rodule = {};
var firstRoom = new Object();

rodule.insertRoom = function(req, res) {
 var room = new Room();

  room.title = req.body.title;
  room.ageMin = req.body.ageMin;
  room.ageMax = req.body.ageMax;
  room.date = req.body.date;
  room.gender = req.body.gender;
  room.price = req.body.price;
  room.openUrl = req.body.openUrl;
  room.explain = req.body.explain;

  room.save(function(err) {
            //console.log('succees');
/*    if (err) {
        return res.status(500).send({
        error: 'database failure'
      });
    }
      res.json({
      statusCode: '200',
      statusMsg: 'success'
    });*/
  })
}

rodule.updateRoom = function(req, res) {
  
 
  Room.findById('5b50d58eac837b394ca58cf7', function (err, room) {
      
    console.log(room);
      
    if (req.body.title) room.title = req.body.title;
    if (req.body.agMin) room.ageMin = req.body.ageMin;
    if (req.body.ageMax) room.ageMax = req.body.ageMax;
    if (req.body.regDate) room.Date = req.body.Date;
    if (req.body.gender) room.gender = req.body.gender;
    if (req.body.price) room.price = req.body.price;
    if (req.body.openUrl) room.openUrl = req.body.openUrl;
    if (req.body.explain) room.explain = req.body.explain;

     room.save(function(err) {
      if (!err){
        console.log('update success1');
      }else{
        console.log('database failure');
      }
  /*      res.json({
        statusCode: '200',
        statusMsg: 'success'
      });
      */
    });

})
}

rodule.deleteRoom = function(req, res) {
  Room.remove({
      title: req.params.roomId
    },
    function(err, output) {
      console.log('collection drop');
     /* if (err) return res.status(500).json({
        error: "database failure"
      });

      if (!output.result.n) return res.status(404).json({
        error: 'room not found'
      });

      res.json({
        statusCode: '200',
        statusMsg: 'success'
  });
      res.status(204).end();*/
    })
}

rodule.getRoomList = function(req, res) {

  Room.find(function(err, rooms) {
/*    if (err) {
      return res.status(500).send({
        error: 'database failure'
      });
    }
    res.json({
      statusCode: '200',
      statusMsg: 'success',
      total: '2',
      resultList: {}
    });*/
      console.log(rooms); 
     firstRoom = rooms[0];
     console.log('**********2222222222222**********+'+ firstRoom +'**********************');
      if(rooms) return firstRoom;
     
      
  })
    console.log('*********3333333333333***********+'+ firstRoom +'**********************');
    return firstRoom;
}

module.exports = rodule;