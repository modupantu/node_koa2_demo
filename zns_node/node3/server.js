const http=require('http');
http.createServer((req,res)=>{
 //post-req
 let str='';//存放数据
 let i=0;
 //data---有一段数据到达触发一次
 req.on('data',(data)=>{
 	console.log(`${i++}ci `)
 str += data;
 })
 //end---数据全部到达后触发
 req.on('end',()=>{
 	console.log(str)
 })
 res.end();
}).listen(3333)