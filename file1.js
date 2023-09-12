var fs=require('fs');
fs.readFile('cseb.txt','utf8',function(err,data){
					if (err) throw err;
						console.log(data);

});
console.log('Open a file to reading');