/*
洋葱模型

*/

const Koa = require('koa');
const app = new Koa();
app.use(async (ctx, next) => {
  await next()
  console.log(1);

  ctx.body = 'hello 11world'

});
app.use(async (ctx, next) => {

  await next()
  console.log(2)
});
app.use(async (ctx, next) => {
  console.log(3)
  await next()
  console.log(4);

});
app.use(async (ctx, next) => {
  console.log(5)

});

app.listen(3001);