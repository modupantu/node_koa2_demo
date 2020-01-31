const express=require('express');
var app=express();
const libs=require('./libs');
app.listen('8084');

app.use(libs());


//在根路经请求时执行
app.use('/',function (req,res) {
    console.log(req.body)
});