
/*
var callbackLoop1=function(a,b){
    while(a>0){
        console.log(handleCounter(a));
        a--;
    }
}
*/
var callbackLoop2=function(c,callback){
    for(var i=1;i<=c;i++){
        callback(i);
        
    }
    console.log("***exiting CallbackLoop****");
}

var handleCounter=function(result) {
    console.log('the callback count is '+result);
}

//callbackLoop1(5,handleCounter);
//callbackLoop1(2,handleCounter);
//callbackLoop1(7,handleCounter);

callbackLoop2(5,handleCounter);
callbackLoop2(2,handleCounter);
callbackLoop2(7,handleCounter);