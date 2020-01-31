const express = require('express');
const cookieParser=require('cookie-parser');
var server=express();

/**
 *1.發送cookie
 * req.secret='qweqwe';//簽名字符串
 * res.cookie(name,value',{path:'/',maxAge:毫秒，signed:是否簽名})
 */
/**
 * 2.讀取cookie
 * install   cookie-parser
 * server.use(cookieParser('簽名字符串'))
 * console.log('加密cookie',req.signedCookies);
 * console.log('沒有加密的cookie',req.cookies);
 */
/**
 * 2.2cookie 加密
 * install cookie-encrypter
 */
/**
 * 3.刪除cookie
 * res.clearcookie('name');
 */

server.use(cookieParser('qweqwe'));//解析cookie中間件

//cookie 加密
server.use('/',function (req,res) {
    req.secret='qweqwe';//簽名字符串
    res.cookie('user','crc',{signed:true});//signed 允許加密


    //解析加密cookie
    console.log('加密cookie',req.signedCookies);
    console.log('沒有加密的cookie',req.cookies);
    res.send('ok');
})
server.listen(8083)