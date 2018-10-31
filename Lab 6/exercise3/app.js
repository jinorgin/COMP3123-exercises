var express=require('express');
var app=express();
var mongoose=require('mongoose');

mongoose.connect('mongodb://<dbuser>:<dbpassword>@ds147003.mlab.com:47003/local_library');

var Schema = mongoose.Schema;

var userSchema = new Schema({name:String,status:String});

var User = mongoose.model('User',userSchema);

var john = User({name:'John', status: 'active'});

john.save(function(err){
    if(err) throw err;

    console.log("**** User saved! ****");
});

var port = process.env.port || 3000;
app.listen(port);