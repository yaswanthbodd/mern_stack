// To write content in the file
var fs=require('fs');
fs.writeFile('cseb.txt','Hello yash!',function(err,data){
				if (err) throw err;
				console.log(data);
});
console.log('write a file');