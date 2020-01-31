const http=require('http');
const URL_LIB=require('url')
http.createServer((req,res)=>{
	//URL_LIB.parse(req.url,true) true是为了解析obj.query
	let obj=URL_LIB.parse(req.url,true);
	let pathname=obj.pathname;
	let getData=obj.query;
console.log(pathname,getData)



	res.write('111')
	res.end()
}).listen(3333)