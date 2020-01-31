const express=require('express');
const bodyParser=require('body-parser');

// const expressStatic=require('');

var server=express();
server.listen(8080);

server.use(bodyParser.urlencoded({
    extended:false,//扩展模式
    limit:2*1024*1024 //限制2M
}));//加工post传递的数据
server.use('/',function (req,res) {
  //console.log(req.query)//get
    console.log(req.body)//post
});