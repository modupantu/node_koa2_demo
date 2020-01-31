const http=require('http');
const querystring=require('querystring')
http.createServer((req,res)=>{
	var  GET={};
	var url=''
	if(req.url.indexOf('?')!=-1){
		let arr=req.url.split('?');
		 url=arr[0];
		GET=querystring.parse(arr[1])
	}else{
		url = req.url
	}
console.log(url,GET)
	res.write('111')
	res.end()
}).listen(3333)