const http=require('http');
http.createServer((req,res)=>{
	var  GET={};
	var url=''
	if(req.url.indexOf('?')!=-1){
		let arr=req.url.split('?');
		 url=arr[0];
		let arr1=arr[1].split('&');
		for (let i = 0; i < arr1.length; i++) {
			let arr2=arr1[i].split('=');
			GET[arr2[0]]=arr2[1];
		}
	}else{
		url = req.url
	}
console.log(url,GET)
	res.write('111')
	res.end()
}).listen(3333)