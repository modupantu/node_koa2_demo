const Koa = require('koa');

const koaBody = require('koa-body'); //获取前端通过post 发送的body 的内容
const error = require('koa-json-error')
const parameter = require('koa-parameter');
const mongoose = require('mongoose')
const app = new Koa();
const koaStatic = require('koa-static');
const path = require('path');
const routing = require('./routes');
const {
  connectionStr
} = require('./config')
mongoose.connect(connectionStr, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}, () => console.log('mongoose连接成功'));
mongoose.connection.on('error', console.error)
mongoose.set('useFindAndModify', false)
app.use(koaStatic(path.join(__dirname, 'public'))) //图片生成链接
// 自定义错误处理
app.use(error({
  postFormat: (e, {
    stack,
    ...rest
  }) => process.env.NODE_ENV === 'production' ? rest : {
    stack,
    ...rest
  }
}));
app.use(koaBody({
  multipart: true,
  formidable: {
    uploadDir: path.join(__dirname, '/public/upload'),
    keepExtensions: true, //保留文件拓展名
  }
})); //请求体
app.use(parameter(app)) //校验请求体
routing(app); //路由挂载


app.listen(3001, () => console.log('启动成功！3001'));