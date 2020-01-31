
const express=require('express');
const cookieParser=require('cookie-parser');//讀取cookie
const cookieSession= require('cookie-session');//

var server=express();

//session:

var arr=[];
for(var i=0;i<1000000;i++){
    arr.push('sig_'+Math.random());
}
server.use(cookieParser());
/*
*session 存儲
* install cookie-session
*
 */
server.use(cookieSession({
       name:'sess',
       keys: arr,//keys越長破解難度越大
       maxAge:2*3600*1000//預防session劫持
}));
server.use('/',function (req,res) {
    if(req.session['count']==null){
        req.session['count']=1;
    }else{
        req.session['count']++;
    }
    console.log(req.session['count']);


    res.send('ok')
})
/**
 * session 刪除
 * delete req.session
 */

server.listen(8084)