// 웹브라우저로 요청을 할 때, 요청 파라미터를 분리
//url 모듈
var url = require('url');

var urlStr='https://search.naver.com/search.naver?where=nexearch&sm=top_hty&fbm=1&ie=utf8&query=popcorn';

var curUrl = url.parse(urlStr);
console.dir(curUrl);

console.log('query -> ' + curUrl.query);

var curStr = url.format(curUrl);
console.log('url ->' + curStr);

//querystring 모듈
var querystring = require('querystring');
var params = querystring.parse(curUrl.query);
console.log('검색어 : ' + params.query);



