var users = [{name:'허규원', age:20},{name:'허규원2',age:22}];
console.log('배결 원소의 개수 : ' + users.length);

users.unshift({name:'허규원3',age:21});
console.log('배열 원소의 개수 :' + users.length);

console.dir(users);

var elem = users.shift();
console.log('배열 원소의 개수 :' + users.length);

console.log('shift 한 원소');
console.dir(elem);