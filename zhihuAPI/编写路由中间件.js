const Koa = require('koa');
const app = new Koa();
/**
 *  编写路由中间件
 */

app.use(async (ctx) => {
  if (ctx.url === '/') {
    ctx.body = '主页'
    //解析http的方法
  } else if (ctx.url === '/users') {
    if (ctx.method === 'GET') {
      ctx.body = '用户列表'
    } else if (ctx.method === 'POST') {
      ctx.body = '闯进啊'
    } else {
      ctx.status = 405
    }
    //解析路由hrl上的参数
  } else if (ctx.url.match(/\/users\/\w+/)) {
    const userid = ctx.url.match(/\/users\/(\w+)/)[1]
    ctx.body = userid
  } else {
    ctx.status = 404;
  }
});
app.listen(3001);