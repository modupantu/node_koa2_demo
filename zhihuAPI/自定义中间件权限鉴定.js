const User = require('../models/users');
const jwt = require('jsonwebtoken')
const {
  secret
} = require('../config')
class UserCtl {
  //获取用户列表
  async find(ctx) {
    ctx.body = await User.find();
  }
  //获取指定用户
  async findById(ctx) {
    const user = await User.findById(ctx.params.id);
    if (!user) {
      ctx.throw(404, '用户不存在！')
      return false;
    }
    ctx.body = user
  }
  //创建用户
  async create(ctx) {
    // 参数校验
    ctx.verifyParams({
      name: {
        type: "string",
        required: true
      },
      password: {
        type: "string",
        required: true
      }
    })

    const {
      name
    } = ctx.request.body;
    const reqeatedUser = await User.findOne({
      name
    })
    if (reqeatedUser) {
      ctx.throw(409, '用户已经存在')
    }
    const user = await new User(ctx.request.body).save();
    ctx.body = {
      message: '添加成功'
    };
    ctx.status = 200;
  }
  // 中间件权限鉴定
  async checkOwner(ctx, next) {
    console.log(ctx.params.id, ctx.state.user._id)
    if (ctx.params.id !== ctx.state.user._id) {
      ctx.throw(403, '没有权限')
    }
    await next()
  }



  //修改用户
  async update(ctx) {

    // 参数校验
    ctx.verifyParams({
      name: {
        type: "string",
        required: false
      },
      password: {
        type: "string",
        required: false
      }
    })
    const user = await User.findByIdAndUpdate(ctx.params.id, ctx.request.body);
    if (!user) {
      ctx.throw(404, '用户不存在')
    }
    ctx.status = 200;

  }
  // 删除用户
  async delete(ctx) {
    const user = await User.findByIdAndRemove(ctx.params.id);
    if (!user) {
      ctx.throw(404, '用户不存在');
    }

    ctx.status = 204 //没有内容但是修改成功
  }
  async login(ctx) {
    ctx.verifyParams({
      name: {
        type: 'string',
        required: true
      },
      password: {
        type: 'string',
        required: true
      }
    })
    const user = await User.findOne(ctx.request.body);
    if (!user) {
      ctx.throw(401, '用户名或密码不正确')
    }
    const {
      name,
      _id
    } = user
    const token = jwt.sign({
      name,
      _id
    }, secret, {
      expiresIn: '1d'
    })
    ctx.body = {
      token
    }
  }
}
module.exports = new UserCtl();