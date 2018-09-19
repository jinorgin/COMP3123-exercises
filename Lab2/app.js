//var ft1=require('./sportsteam');
//var ft2=require('./calculator');
//var ft3=require('./comparer');





//exercise 1
//ft1.teamname='Leafs';

//ft1.Cheer();

//exercise 2
/*var n1=5;
var n2=5;

var result = (ft3.AreNumberEqual(n1,n2)) ? ft2.Add(n1,n2): ft2.Subtract(n1,n2);

console.log(result);
*/
//exercise 3
/*var events=require ('events');
var eventEmitter=new events.EventEmitter();

var fn=function(){
    console.log('call 911');
}
var alarm=function(){
    console.log('alarm has been triggered.');
    eventEmitter.emit('call');
}

eventEmitter
.on('call',fn)
.on('alarmKey',alarm);
eventEmitter
.emit('alarmKey');
*/
//exercise 4
const http=require('http');

const hostname='127.0.0.1';
const port=3000;

const server = http.createServer((req, res) => {
    res.statusCode=200;
res.setHeader('Content-Type','text/plain');
res.end('Hello World\n');
});

server.listen(port,hostname,()=>{
    console.log(`Server running at http://${hostname}:${port}/`);
});