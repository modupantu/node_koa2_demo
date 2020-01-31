/* 自动修改文件内容 */
const shell = require('shelljs')
// shell.sed('-i', 'version', 'aa', './test/version.js')
// shell.sed('-i', /version\s=/, 'v =', './test/version.js')
const content = shell.cat('./test/version.js')
const rep = content.stdout.split('.')
rep[rep.length - 1] = parseInt(rep[rep.length - 1]) + 1 + "'"
shell.sed('-i', content, rep.join('.'), './test/version.js')