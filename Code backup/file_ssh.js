const node_ssh = require('node-ssh') //服务器文件上传和下载
const ssh = new node_ssh()

ssh.connect({
  host: '182.11.18.14',
  username: 'admin',
  password: 'admin'
}).then(() => {
  console.log('连接成功')
  // 可执行linex上的命令
  ssh.execCommand('node -v').then(res => {
    console.log(res.stdout)
  })
  // 将本地文件上传到服务器文件中.如果没有bak.js 则会新建
  ssh.putFile('./bak.js', '/home/demo/bak.js').then(res => {
    console.log('上传成功')
  }, err => {
    console.log('上传失败', err)
  })
  // 多文件上传 需要local和remote属性
  ssh.putFiles([{
      local: './bak.js',
      remote: '/home/dist/bak.js'
    },
    {
      local: './index.js',
      remote: '/home/dist/index.js'
    }
  ]).then(res => {
    console.log('上传成功', res)
  })
  // 文件夹上传
  ssh.putDirectory(
    './test',
    '/home/demo/test', {
      recursive: true, //递归
      concurrency: 10
    }
  ).then((status) => {
    console.log('文件夹上传成功')
  })
}).catch((err) => {
  console.log('连接失败', err)
})