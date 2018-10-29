/*var request = require('request');
var fs = require('fs');

const writer = getWritableStreamSomehow();
//const reader = 


request('http://www.google.com', function (error, res, body){
    
console.log('error: ',error);
console.log('statusCode: ',res && Response.statusCode);
console.log('body: ',body);
})*/

var request= require('request');
var fs=require('fs');

request('http://google.com').pipe(fs.createWriteStream('output.html'));