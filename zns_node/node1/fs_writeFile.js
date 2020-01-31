const fs=require('fs');
//fs.writeFile(文件名，内容，回调函数 )
fs.writeFile('bbb.txt','1111111111',(err)=>{
	console.log(err)
})