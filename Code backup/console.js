/* 接收控制台输出 */
const process = require('process');
process.stdout.write('需要变更版本号吗（y/n）?')
process.stdin.on('data', (input) => {
  input = input.toString().trim();
  if (['Y', 'y', 'yse', 'YES'].includes(input)) {
    // 执行成功的方法
  }
  if (['N', 'n', 'no', 'NO'].includes(input)) {
    process.exit(0) //退出
  }
})