const mongoose = require('mongoose');
mongoose.connect("mongodb://127.0.0.1:27017/yash",(err)=>
{
	if(err)
		console.log("DB Not Connected");
	else
		console.log("DB Connected");
});

const ns = new mongoose.Schema({
	name:String,
	age:Number,
	rno:Number
});

const nm = new mongoose.model("records",ns);

var myQuery = {name:"yaswanth"};
var newValues = {$set:{rno:577}};
nm.updateOne(myQuery,newValues,function(err,res){
	if(err) throw err;
	console.log("1 document updated");
	
});