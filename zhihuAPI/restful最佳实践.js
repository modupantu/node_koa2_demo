const Koa = require('koa');
const app = new Koa();
const Router = require('koa-router');
const router = new Router()
// 前缀
const usersRouter = new Router({
  prefix: '/users'
})


router.get('/', (ctx) => {
  ctx.body = '这是主页'
})
usersRouter.get('/', (ctx) => {
  ctx.set('Allow', 'GET', 'POST')
  ctx.body = [{
    name: 'zhangsan'
  }, {
    'name': 'list'
  }]
})
usersRouter.post('/', ctx => {
  ctx.body = {
    name: 'lili'
  }
})
usersRouter.get('/:id', (ctx) => {
  ctx.body = {
    name: 'lili'
  }
})
// 修改用户
usersRouter.put('/:id', (ctx) => {
  ctx.body = {
    name: 'lili2'
  }
})
// 删除用户
usersRouter.delete('/:id', (ctx) => {
  ctx.status = 204 //没有内容但是修改成功
})



app.use(router.routes())
app.use(usersRouter.routes())
// 开启options
app.use(usersRouter.allowedMethods())










app.listen(3001);