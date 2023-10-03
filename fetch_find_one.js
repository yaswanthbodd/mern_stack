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

nm.findOne({},function(err,data){
	if(err)
		console.log(err);
	else
		console.log("First Function call: ",data);
	
});