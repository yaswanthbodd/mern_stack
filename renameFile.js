var fs=require('fs');
fs.rename('pawan.txt','yas.txt',function(err){
				if (err) throw err;
				console.log("File renamed successfull!");
});