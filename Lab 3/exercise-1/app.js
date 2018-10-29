var fs = require('fs');

var stream=fs.createReadStream("data.txt");

stream.on("data", function(data)
{
    console.log(data); //This will print in number.
    console.log(data.toString()); //this will print what's "data.txt" wrote.
})