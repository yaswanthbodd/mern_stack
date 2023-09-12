var fs=require('fs');
fs.writeFile('cseb.txt','Hello pawan!',function(err,data){
				if (err) throw err;
				//console.log(data);
});
console.log('write a file');

//read the file
fs.readFile('cseb.txt','utf8',function(err,data){
					if (err) throw err;
						console.log(data);

});
console.log('Open a file to reading');