const express=require('express');
let server=express();
server.use('/a.html',(req,res)=>{
    res.send({a:12,b:5});
    res.end();
});
server.use('/b.html',(req,res)=>{
    res.send('123');
    res.end();
});
server.get('/',(req,res)=>{
   console.log('get',req)
    res.end();
});
server.post('/',(req,res)=>{
    console.log('post',req)
    res.end();
});
server.listen(8888);