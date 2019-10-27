const router = require('koa-router')()
const fs = require('fs')
const path = require('path');
const userService = require('../controllers/mySqlConfig');
// 接口前缀
router.prefix('/users')

/**
 * 注册接口
 * 判断用户名是否存在
 */
router.post('/userRegister', async (ctx, next) => {
  let _username = ctx.request.body.username;
  let _userpwd = ctx.request.body.userpwd;
  let _nickname = ctx.request.body.nickname;
  if (!_nickname && !_username && !_userpwd) {
    ctx.body = {
      code: '800001',
      msg: '用户名密码昵称不能为空'
    }
    return;
  }
  let user = {
    username: _username,
    userpwd: _userpwd,
    nickname: _nickname
  }
  await userService.findUser(user.username).then(async (res) => {
    if (res.length) {
      try {
        throw Error("用户名已存在");
      } catch (error) {
        console.log(error)
      }
      ctx.body = {
        code: '800003',
        data: {},
        msg: '用户名已存在'
      }
    } else {
      await userService.insertUser([user.username, user.userpwd, user.nickname]).then((res) => {
        console.log(res);
        let r = '';
        if (res.affectedRows != 0) {
          r = 'ok';
          ctx.body = {
            code: "800000",
            data: r,
            mess: "注册成功"
          }
        } else {
          r = 'error';
          ctx.body = {
            code: "800004",
            data: r,
            mess: "注册失败"
          }
        }
      })
    }
  })
})

/**
 * 登陆接口
 * 根据用户输入的username 和 password
 */
router.post('/userLogin', async (ctx, next) => {
  let _username = ctx.request.body.username;
  let _userpwd = ctx.request.body.userpwd;
  await userService.userLogin(_username, _userpwd).then((res) => {
    let r = '';
    if (res.length) {
      r = 'ok';
      let result = {
        id: res[0].id,
        nickname: res[0].nickname,
        username: res[0].username
      }
      ctx.body = {
        code: "800000",
        data: result,
        mess: "登陆成功"
      }

    } else {
      ctx.body = {
        code: "404",
        data: {},
        mess: "err"
      }

    }
  })
})


/**
 * 查询所有注册用户
 */
router.post('/all', async (ctx, next) => {
  await userService.getAllUsers().then((res) => {
    console.log('res' + JSON.stringify(res));
    ctx.body = res
  })
})

/**
 * 多文件上传
 * 
 */
router.post('/uploadfiles', async (ctx, next) => {

  const files = ctx.request.files.file; //获取文件
  console.log('==file==', files)
  if (files.length > 1) {
    for (let file of files) {
      // 创建可读流
      const reader = fs.createReadStream(file.path);
      // 获取上传文件扩展名
      let filePath = path.join(__dirname, 'public/upload/') + `/${file.name}`;
      // 创建可写流
      const upStream = fs.createWriteStream(filePath);
      // 可读流通过管道写入可写流
      reader.pipe(upStream);
    }
  } else {
    // 创建可读流
    const reader = fs.createReadStream(files.path);
    // 获取上传文件扩展名
    let filePath = path.join(__dirname, 'public/upload/') + `/${files.name}`;
    // 创建可写流
    const upStream = fs.createWriteStream(filePath);
    // 可读流通过管道写入可写流
    reader.pipe(upStream);
  }
  // return ctx.body = '上传成功!';
  ctx.body = {
    code: 200,
    data: {},
    msg: '上传成功！'
  }
});

module.exports = router




// router.get('/', function (ctx, next) {
//   ctx.body = 'this is a users response!'
// })

// router.get('/bar', function (ctx, next) {
//   ctx.body = 'this is a users/bar response'
// })