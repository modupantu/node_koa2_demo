/**
 *name: 网页转换pdf 
 *description: 使用 puppeteer（无头浏览器） 将网页转换pdf 
 *@author:  魔都叛徒
 *@date: 2019-11-24 
 */

const puppeteer = require('puppeteer');
(async () => {
  const broswer = await puppeteer.launch()
  const page = await broswer.newPage()
  await page.goto('https://www.bilibili.com/video/av74296450?from=search&seid=9777672849252728802')
  await page.pdf({
    path: 'web.pdf'
  })
  await page.close()
  await broswer.close()
  console.log('ok')
})()