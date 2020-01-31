/* 文件压缩 */

const compressing = require('compressing')

compressing.zip.compressDir('test', 'test.zip').then(() => {
  console.log('压缩成功！')
}).catch(err => {
  console.log('压缩失败')
  console.error(err)
})