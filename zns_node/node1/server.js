const http=require('http');
const fs=require('fs');
let server=http.createServer((req,res)=>{
	console.log('启动成功')
  let file_name='./www'+req.url;
  
  fs.readFile(file_name,(err,FileData)=>{
  	if(err){
  		res.write('404');
  	}else{
  		res.write(FileData);
  	}
  	res.end();
  })

})
server.listen(3333)