var user1 = require('./user1');

function showUser(){
    return user1.getUser().name +', ' + user1.group.name;
    
};

console.log('사용자 정보 ->'+ showUser());


//exports에 객체를 바로 할당하면 문제가 생긴다.
//속성으로 추가 해야 한다.