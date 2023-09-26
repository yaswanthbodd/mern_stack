const mongoose = require('mongoose');

mongoose.connect("mongodb://127.0.0.1:27017/yash",  (error) => {
  if (error) {
    console.error('Error connecting to MongoDB:', error);
  } else {
    console.log('Connected to MongoDB');
  }
});

//Add schema
const ns =new mongoose.Schema({
name:String,
age:Number
});

//Create model
const mo = new mongoose.model("record",ns);

//insert record
const data=new mo({name:'yaswanth',age:20});

//save the data
data.save();