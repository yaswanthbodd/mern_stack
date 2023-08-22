const yas=require("http");
var server=yas.createServer((req,res) =>{
	res.write("Hello this is really works!");
	res.end();
}
);
server.listen(1919);
console.log("Running the program.... to check browser localhost:1919");
