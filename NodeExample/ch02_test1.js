console.log('안녕하세요');

console.log('숫자입니다. %d',10);
console.log('문자열입니다. %s','안녕');

var person = {
    name:'소녀시대',
    age:20
};
console.log('자바스크립트 객체입니다.%j', person);

console.dir(person);
//다른 사람이 만든 라이브러리를 가져다 쓰는 경우에 객체가 가지고 있는 속성을 알고 싶을때 확인 할 수 있다.

console.time('duration_time'); // timeEnd 까지의 시간을 알 수 있음
var result = 0;
for(var i = 0 ; i <10000 ; i++){
    result += i;
}

console.timeEnd('duration_time');

console.log('파일 이름 : %s ',__filename);
console.log('패스 : $s', __dirname);