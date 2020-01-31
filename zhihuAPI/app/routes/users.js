const Router = require('koa-router');
const jwt = require('koa-jwt');
const router = new Router({
  prefix: '/users'
})
const {
  find,
  findById,
  update,
  delete: del,
  create,
  login,
  checkOwner
} = require('../controllers/users')
const {
  secret
} = require('../config')




// 中间件(token校验)
const auth = jwt({
  secret
})
// const auth = async (ctx, next) => {
//   const {
//     token = ''
//   } = ctx.request.header;
//   try {
//     const user = jwt.verify(token, secret);

//     ctx.state.user = user
//   } catch (err) {
//     ctx.throw(401, err.message)
//   }
//   await next()

// }








router.get('/', find)
router.post('/', create)
router.get('/:id', findById)
// 修改用户
router.patch('/:id', auth, checkOwner, update)
// 删除用户
router.delete('/:id', auth, checkOwner, del)
router.post('/login', login)
module.exports = router;