const express=require('express');
const cookParser=require('cookie-parser');//read cookie

var server=express();

//cookie
server.use(cookParser())//cookie 中間件

server.use('/',function (req,res) {
    console.log(req.cookies);
    res.cookie('user','ccc',{path:'/',maxAge:30*24*3600*1000});//save cookie
    res.send('qqq')
})
server.listen(8083);

