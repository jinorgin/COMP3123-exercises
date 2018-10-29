var AddTwoNumbers=function(n1, n2){
    if(isInteger(n1)&&isInteger(n2)){
    
    return "adding two number is: "+n1+n2;
    
}else{
        throw new error();
        
    }
}
var SubtractTwoNumbers=function(n1, n2){
    if(isInteger(n1)&&isInteger(n2)){
    
    return "subtracting two number is: "+n1-n2;
}else{
    throw new error();
}
}
var isInteger = function(param){
    return Number.isInteger(param);
}
module.exports={
    AddTwoNumbers:AddTwoNumbers,
    SubtractTwoNumbers:SubtractTwoNumbers
}