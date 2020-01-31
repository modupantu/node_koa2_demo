const schedule = require('node-schedule');
const moment = require('moment')
const shell = require('shelljs')

function copy() {
  const current = moment().format('YYYYMMDDhhmmss');
  const folder = `src_${current}`
  shell.mkdir('-p', './backups/' + folder)
  shell.cp('-rf', './test', './backups/' + folder)
  shell.echo('备份完成')
}

schedule.scheduleJob('01 * * * * *', () => {
  copy()
})
/* 
// schedule.scheduleJob()
第一个参数为通配符表示时间 一般为6个 * 号
从左到右 依次为秒 分 时 日期 月份 星期
* 每分钟的第01秒触发 '01 * * * * *'
* 每小时的1分01秒触发 '01 1 * * * *' 
* 每天的凌晨1点1分30秒触发 '30 1 1 * * *'
* 每月的1日1分30秒触发 '30 1 1 1 * *'
* 2019年的1月1日1点1分30秒触发 '30 1 1 1 2019 *'
* 每周1的1点1分30秒触发 '30 1 1 * * 1'
*/