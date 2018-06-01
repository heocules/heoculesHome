var users = [{name:'허규원', age:20},{name:'허규원2',age:22}];
console.log('배결 원소의 개수 : ' + users.length);

users.push({name:'허규원3',age:21});
console.log('배열 원소의 개수 :' + users.length);

var elem = users.pop();
console.log('배열 원소의 개수 :' + users.length);

console.log('pop으로 꺼낸 세번째 원소');
console.dir(elem);