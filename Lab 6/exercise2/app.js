var express = require('express');
var app = express();

var requestTime=function(req,res,next){
    req.requestTime=Date.now();
    next();
}

app.listen(3000);



app.get('/json',function(req,res){
    res.json({firstname:'John',lastname:'Smith'});
});

app.get('/toronto+team',function(req,res){
    res.send('<html><head></head><body><h1>Go Toronto!</h1></body></html>');
});

app.get('/greet',function(req,res){
    console.log("GET received: "+req.requestTime);
    res.send('Hello World!');
});