var fs=require('fs');
fs.open('pawan.txt','w',function(err,data){
				if(err) throw err;
				console.log('Empty File created!');
});