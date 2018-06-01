var path = require('path');
//path 라는 모듈의 Join이라는 함수 사용
var directories = ['Users','H-gyuwon','docs'];
var dirStr = directories.join();
console.log('dir : ' + dirStr);

var dirStr2 = directories.join(path.sep);
console.log('dir2 : ' + dirStr2);

var filepath = path.join('/Users/H-gyuwon','notepad.exe');
console.log('filepath : ' + filepath);

var dirname = path.dirname(filepath);
console.log('dirname : ' + dirname);

var basename = path.basename(filepath);
console.log('basename : ' + basename);

var extname = path.extname(filepath);
console.log('extname : ' + extname);

