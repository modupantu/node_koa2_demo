const express=require('express');
const bodyParser=require('body-parser');
var app=express();
app.listen(8080);
app.use('/',function (req,res,next) {
    console.log('a')
    //
    next();//链式操作 执行完a之后需要执行下面的接口
})
app.use('/',function (req,res,next) {
    console.log('b')
})