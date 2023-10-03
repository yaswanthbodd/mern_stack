const express = require('express');
const mongoose = require('mongoose');
mongoose.connect("mongodb://127.0.0.1:27017/yash",(err,db) => {
	if(err)
		console.log("DB Not-Connected");
	else{
		console.log("DB Connected");
		var dbo=db.db
	}
});

const ns=new mongoose.Schema({
	name:String,
	age:Number,
	rno:Number
});

const nm=new mongoose.model("records",ns);

nm.find({age:46}, function (err, data) {
    if (err){
        console.log(err);
    }
    else{
        console.log("First function call : ", data);
    }
});