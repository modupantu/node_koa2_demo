/**
 *name: 启动浏览器
 *description: 
 *@author:  魔都叛徒
 *@date: 2019-11-26 
 */
const puppeteer = require('puppeteer')

puppeteer.launch({
  headless: false,
  // defaultViewport: {
  //   width: 1366,
  //   height: 768
  // }
}).then(browser => {
  browser.newPage().then(page => {
    page.goto('https://www.baidu.com')
  })
})