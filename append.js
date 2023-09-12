var fs=require('fs');
fs.appendFile('cseb.txt','i am papa',function(err,data){
					if(err) throw err;
					//console.log(data);
});

fs.readFile('cseb.txt','utf8',function(err,data){
				if(err) throw err;
				console.log(data);
});
console.log('open a file to reading');