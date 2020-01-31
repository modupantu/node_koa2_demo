const Koa = require('koa');
const app = new Koa();
const bodyParser = require('koa-bodyparser'); //获取前端通过post 发送的body 的内容

const routing = require('./routes')
// 自定义错误处理
app.use(async (ctx, next) => {
  try {
    await next()
  } catch (err) {
    ctx.status = err.status || 500
    ctx.body = {
      message: err.message
    }
  }
})
app.use(bodyParser())

routing(app)


app.listen(3001, () => console.log('启动成功！3001'));