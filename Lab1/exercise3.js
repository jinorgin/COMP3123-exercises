var getCurrentDandT=function(){
    var dt = new Date();
    var current = "Current date: "+
    dt.getFullYear()+"-"+
    dt.getMonth()+"-"+
    dt.getDay()+" Current time: "+
    dt.getHours()+":"+
    dt.getMinutes();

    console.log(current);
}
getCurrentDandT();