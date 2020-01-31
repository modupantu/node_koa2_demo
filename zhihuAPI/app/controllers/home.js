const path = require('path')
class HomeCtl {
  index(ctx) {
    // ctx.set('Allow', 'GET,POST')
    ctx.body = '这是主页'
  }
  upload(ctx) {
    const file = ctx.request.files.file;
    const baseName = path.basename(file.path)
    ctx.body = {
      path: `${ctx.origin}/upload/${baseName}`
    }
  }
}

module.exports = new HomeCtl()