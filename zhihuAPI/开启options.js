const Koa = require('koa');
const app = new Koa();
const Router = require('koa-router');
const router = new Router()
// 前缀
const usersRouter = new Router({
  prefix: '/users'
})


// 多中间件
const auth = async (ctx, next) => {
  if (ctx.url !== '/users') {
    ctx.throw(401);
  }
  await next()
}
router.get('/', (ctx) => {
  ctx.body = '这是主页'
})
usersRouter.get('/', (ctx) => {
  ctx.body = '这是用户列表'
})
usersRouter.post('/', auth, ctx => {
  ctx.body = '创建用户'
})
usersRouter.get('/:id', auth, (ctx) => {

  ctx.body = `这是用户${ctx.params.id}`
})





app.use(router.routes())
app.use(usersRouter.routes())
// 开启options
app.use(usersRouter.allowedMethods())










app.listen(3001);