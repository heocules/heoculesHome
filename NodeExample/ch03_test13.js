var users = [{name:'허규원',age:20}, {name:'허규원2',age:22},
            {name:'허규원3',age:21}];


delete users[1];

console.dir(users);

users.forEach(function(elem,index){
    console.log('원소 #' + index);
    console.dir(elem);
});

users.splice(1,0,{name:'허규원4',age:24});
console.dir(users);

users.splice(2,1);
console.dir(users);

