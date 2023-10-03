const express = require('express');
const mongoose = require('mongoose');
mongoose.connect("mongodb://127.0.0.1:27017/yash",(err)=>{
	if(err)
		console.log("DB Not Connected");
	else
		console.log("DB Connected");
});

const ns=new mongoose.Schema({
	name:String,
	age:Number,
	rno:Number
});

const nm=new mongoose.model("records",ns);

nm.deleteOne({name:'subbu'})
.then(function(){
	console.log("Data Deleted");
}).catch(function(error){
	console.log(error);
});