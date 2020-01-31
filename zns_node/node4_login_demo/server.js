const http=require('http');
const fs=require('fs');
const querystring=require('querystring');
const urlLib=require('url');


//储存数据
let users={};
http.createServer((req,res)=>{
  //解析数据
  let str='';
  req.on('data',data=>{
  	str+=data;
  })
  req.on('end',()=>{
  	const obj=urlLib.parse(req.url,true)

  	const url=obj.pathname;//文件名
  	const GET=obj.query;//get数据
  	const POST=querystring.parse(str);//post数据
  	console.log(POST)

  	//区分-----接口，文件

  	if(url=='/user'){//接口
  		console.log(POST.act)
  		switch(POST.act){
  			case 'reg':
  			//1.查找是否有相同用户名
  			if(users[POST.user]){
  				res.write('{"ok":false,"msg":"用户名已存在！"}');
  			}else{
  				//2.插入到users
  				users[POST.user]=POST.password;
  				res.write('{"ok":true,"msg":"注册成功"}');
  			}
  			break;
  			case 'login':
  			//1.查找用户是否存在
  			if(users[POST.user]==null){
  				res.write('{"ok":false,"msg":"用户名不存在！"}');
  			}else if(users[POST.user]!=POST.password){
  				//2.检查用户密码
  				res.write('{"ok":false,"msg":"密码错误！"}');
  			}else{
  				res.write('{"ok":true,"msg":"登录成功"}');
  			}
  			break;
  			default:
  			res.write('{"ok":false,"msg":"未知的act"}');
  			
  		}
  		res.end();
  	}else{//文件
	  	//读取文件
	    let file_name='./www'+url;
	    fs.readFile(file_name,(err,data)=>{
	    	if(err){
	    		res.write('404')
	    	}else{
	    		res.write(data)
	    	}
	    	res.end()
	    })
	  	}
  })
}).listen(3333)