/* 
nodemailer 发送邮件
*/
const nodemailer = require('nodemailer')
var transporter = nodemailer.createTransport({
  host: 'smtp.yeah.net',
  secure: true,
  // secureConnection: true, // 使用SSL方式（安全方式，防止被窃取信息）
  auth: {
    user: 'caoruichun@yeah.net',
    pass: 'caoruichun123'
  }
})
// 发送消息
// var mailOptions = {
//   from: 'caoruichun@yeah.net',
//   to: '921279706@qq.com',
//   subject: '曹瑞春开发邮件',
//   text: '测试数据'
// }
// 发送附件
var mailOptions = {
  from: 'caoruichun@yeah.net',
  to: '921279706@qq.com',
  subject: '曹瑞春开发邮件',
  text: '测试数据',
  attachments: [{
    filename: 'data.json',
    path: './package.json'
  }]
}

function sendMail() {
  transporter.sendMail(mailOptions, function (err, info) {
    if (err) {
      console.log(err)
    } else {
      console.log('send_ok', info)
    }
  })
}
sendMail()