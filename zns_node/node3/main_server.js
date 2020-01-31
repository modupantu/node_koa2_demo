const http=require('http');
const fs=require('fs');
const querystring=require('querystring');
const URL_LIB=require('url');
let server=http.createServer((req,res)=>{
//get
	let obj=URL_LIB.parse(req.url,true);
	let url=obj.pathname;
	const GET=obj.query;

//post
let str=''
req.on('data',data=>{
	str+=data
})
req.on('end',()=>{
	const POST=querystring.parse(str);
	console.log(url,GET,POST);
})

//文件请求
let File_name='./www'+url;
fs.readFile(File_name,(err,data1)=>{
	if(err){
		res.write("404");
	}else{
		res.write(data1);
	}
	res.end()
})
})
server.listen(3333)
