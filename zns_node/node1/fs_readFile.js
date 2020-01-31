const fs=require('fs');

//读取文件 fs.readFile(文件名,回调函数)
fs.readFile('aaa.txt',(err,data)=>{
	if(err){
		conosle.log('读取错误')
	}else{
		console.log(data.toString())
	}
})
