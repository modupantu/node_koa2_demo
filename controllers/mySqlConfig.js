const mysql = require('mysql');
const config = require('./defaultConfig');

// 创建线程池
let pool = mysql.createPool({
  host: config.database.HOST,
  user: config.database.USERNAME,
  password: config.database.PASSWORD,
  database: config.database.DATABASE,
  port: config.database.PORT
});

// 统一连接数据库的方法
/*
备注：这里采用连接池的方式连接数据库。连接池在并发执行数越大时， 对比单次连接方式， 优势越明显；
而且支持的最大并发执行数远大于单次连接
*/
let allServices = {
  query(sql, values) {
    return new Promise((resolve, reject) => {
      pool.getConnection((err, connection) => {
        if (err) {
          reject(err)
        } else {
          connection.query(sql, values, (err, rows) => {
            if (err) {
              reject(err)
            } else {
              resolve(rows)
            }
            connection.release()
          })
        }
      })
    })
  }
}

//读取所有 users 表数据，测试数据链接
let getAllUsers = function () {
  let _sql = `select * from users;`
  return allServices.query(_sql);
}


/**
 * 注册用户
 */
let insertUser = function (value) {
  let _sql = `insert into users set username=?,userpwd=?,nickname=?;`
  return allServices.query(_sql, value);
}
/**
 * 查找用户
 */
let findUser = function (username) {
  let _sql = `select * from users where username="${username}";`
  return allServices.query(_sql);
}
/**
 * 用户登陆
 */
let userLogin = function (username, userpwd) {
  let _sql = `select * from users where username="${username}" 
  and userpwd="${userpwd}";`
  return allServices.query(_sql);
}

module.exports = {
  getAllUsers,
  insertUser,
  findUser,
  userLogin
}