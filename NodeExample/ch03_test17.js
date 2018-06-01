function add(a,b,callback){
    var result = a+b;
    callback(result);
    
    
    var count =0; //내부 함수(1)가 자신을 만들어준 외부함수의 변수의 값 그대로 유지하면서 참조 할 수 있다 
    var history = function(){
        //(1)
        count +=1;
        return count + ' : ' + a + ' + ' + b + ' = ' + result;
    };
    
    return history;
}

var add_history = add(20,20,function(result){
    console.log('더하기 결과 : ' + result);
});

console.log('add_history의 자료형 : ' + typeof(add_history));

console.log('결과값으로 받은 함수 실행 : ' + add_history());
console.log('결과값으로 받은 함수 실행 : ' + add_history());
console.log('결과값으로 받은 함수 실행 : ' + add_history());