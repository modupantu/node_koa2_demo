### options 方法的作用
  - 检测服务器所支持的请求方法
  - cors 中的预检请求
#### allowedMethods 的作用
  - 响应options 方法，告诉它所支持的请求方法
  - 响应返回405（不允许）和501（没实现）的状态码  


  ### 插件
    - cross-env 跨平台设置环境变量
    - koa-bodyparser 接受body体传递过来json和form类型的参数
    - koa-body 接受body体传递过来json,form,file,类型的参数
    - koa-json-error 异常错误处理
    - nodemon node 开发阶段自动重启工具
    - koa-parameter 校验参数
    - jsonwebtoken 设置token中间件
    - koa-jwt token鉴权中间件
    - koa-static 设置http服务访问静态文件
### sql
#### noSQL
  - 列存储（HBase）
  - 文档存储（MongoDB）
  - Key-value存储（redis）
  - 图存储（flockDB）
  - 对象存储（db4o）
  - xml存储（BaseX）

#### MongoDB

     云MongoDB   == MongoDB Atlas
    mongodb+srv://modupantu:<password>@zhihu1-0a700.mongodb.net/test?retryWrites=true&w=majority

    mongodb+srv://modupantu:caoruichun@zhihu1-0a700.mongodb.net/test?retryWrites=true&w=majority

#### jsonwebtoken  生成token
    jwt = require('jsonwebtoken')
    token=jwt.sign({name:'123'},'secret')//加密
    jwt.decode(token) //解密
    jwt.verify(token,'secret')//验证
