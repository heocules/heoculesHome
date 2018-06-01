//on 이벤트를 받기위한
process.on('exit',function(){
    console.log('exit 이벤트 발생함.');

});

setTimeout(function(){
           console.log('2초 후에 실행 되었음.');

            process.exit();
},2000);

console.log('2초 후에 실행될 것임.');
