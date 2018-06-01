var person = {};

person.name = '허규원';
person['age'] = 20;
person.add = function(a,b){
    return a + b;
    
};

console.log('더하기 : ' + person.add(20,20));