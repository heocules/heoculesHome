var users = [{name:'허규원',age :20}, {name:'허규원2',age:22},
            {name:'허규원3',age:21}];

for(var i = 0;i<users.length;i++){
    console.log('배열 원소 # ' + i + ':' + users[i].name);
}

users.forEach(function(elem, index){
    console.log('배열 원소 # ' + index + ' : ' + elem.name);
});
