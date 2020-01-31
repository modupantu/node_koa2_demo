const express = require('express');
const expressStatic=require('express-static');
let app=express();
app.listen(8080);
/**
 *用户数据
 */
let users={
    'blue':'123456',
    'zhangsan':'123',
    'lisi':'456'
};
app.get('/login',(req,res)=>{
    let user=req.query['user'];
    let pass=req.query['pass'];

    if(users[user] == null){
        res.send({ok:false,msg:'此用户不存在'});
    }else{
        if(users[user] != pass){
            res.send({ok:false,msg:'密码错误'});
        }else{
            res.send({ok:true,msg:"success"});
        }
    }
});
app.use(expressStatic('./www'));