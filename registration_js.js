const mongoose=require('mongoose');
var express=require('express');
var app=express();
var fName='';
var lName='';
var jsBranch='';
var jsEmail='';
var jsYear='';
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

app.get('/registration_js/',function(req,res){
    fName=req.query['firstName'];
    lName=req.query['lastName'];
    jsBranch=req.query['branch'];
    jsEmail=req.query['email'];
    jsYear=req.query['year'];
    jsPass=req.query['pass'];
    const data1=new nm({fname:fName,lname:lName,SBranch:jsBranch,SEmail:jsEmail,Syear:jsYear,Password:jsPass});
    data1.save();

    res.send("Registration Successfull....");
})

var server=app.listen(2003);