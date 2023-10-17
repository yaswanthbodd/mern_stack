const mongoose=require('mongoose');
var express=require('express');
const bodyParser = require('body-parser');
var app=express();
const User = require('./models/user');
var jsEmail='';
var jsPass='';
mongoose.connect("mongodb://127.0.0.1:27017/yash",(err)=>{
	if(err)
		console.log("DB Not Connected");
	else
		console.log("DB Connected");
});

const ns=new mongoose.Schema({
    fname:String,
    lname:String,
    SBranch:String,
    SEmail:String,
    Syear:Number,
    Password:String
});


const nm=new mongoose.model("registrations",ns);
module.exports = nm;

app.get('/log/',function(req,res){
    jsEmail=req.query['cemail'];
    jsPass=req.query['cpass'];

    nm.find({SEmail:jsEmail},function(err,data){
        if(err)
            res.send('ERRor');
        else{
            if(nm.SEmail===jsEmail)
                res.send('Validate.....');
            else
                res.send('No validate');
        }
    })
})

var server=app.listen(2003);