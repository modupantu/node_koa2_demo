// 代码备份
/* 
1 需要备份时手动执行一次，一般用于代码需要大改前保留一份原有数据
2 每天定时备份一份，例如重要数据
*/

// var shell = require('shelljs');
// if (!shell.which('git')) {
//   shell.echo('sorry,this script requires git')
//   shell.exit(1);
// }
// // copy files to release dir 
// shell.rm('-rf', 'out/Release')
// shell.cp('-R', 'stuff/', 'out/Release');

// // Replace macros in each  .js file

// shell.cd('lib')
// shell.ls('*.js').forEach(function (file) {
//   shell.sed('-i', 'BUILD_VERSION', 'v0.1.2', file);
//   shell.sed('-i', /^.*REMOVE_THIS_LINE.*$/, '', file);
//   shell.sed('-i', /^.*REPLACE_LINE_WITH_MACRO.*\n/, shell.cat('macro.js'), file);

// })
// shell.cd('..')

// // Run external tool synchronously

// if (shell.exec('git commit -am "Auto-commit"').code !== 0) {
//   shell.echo('ERROR: git commit failed')
//   shell.exit(1);
// }
/* *
 手动备份
*/
const shell = require('shelljs')
const moment = require('moment')
const current = moment().format("YYYYMMDDhhmmss")
const folder = `src_${current}`
// 创建一个时间信息的文件夹，方式覆盖同一目录
shell.mkdir('-p', './backups/' + folder)
// shelljs 复制文件或者文件夹方法。
shell.cp('-rf', './test', './backups/' + folder)