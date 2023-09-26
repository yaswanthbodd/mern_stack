const express =require('express');
const mongoose =require('mongoose');
mongoose.connect("mongodb://127.0.0.1:27017/yash",(err) => {
if(err)
	console.log("DB Not Connected-Error");
else
	console.log("DB Connected");
});

const ns=new mongoose.Schema({
name:String,
age:Number,
rno:Number
});

const nm=new mongoose.model("records",ns);

const data1 = new nm({name:"srinu",age:19,rno:21});
data1.save();

const data2=new nm({name:"subbu",age:20,rno:36});
data2.save();