var Calc = require('./calc3');

var Calc1 = new Calc();
Calc1.emit('stop');

console.log('Calc 에 stop 이벤트 전달함.');
