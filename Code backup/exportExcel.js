const xlsx = require('xlsx')
const arr = [
  ['姓名', '年龄', '性别'],
  ['crc', '12', '男'],
  ['asd', '22', '女']
]

const wb = {
  SheetNames: ['hello'],
  Sheets: {
    'hello': xlsx.utils.aoa_to_sheet(arr)
  }
}
xlsx.writeFile(wb, './test/test.xlsx')