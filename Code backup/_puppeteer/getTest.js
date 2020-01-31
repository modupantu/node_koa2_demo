/**
 *name: 获取文本
 *description: 
 *@author:  魔都叛徒
 *@date: 2019-11-27 
 */

const puppeteer = require('puppeteer');

async function run() {
  const browser = await puppeteer.launch({
    headless: false,
    defaultViewport: {
      width: 1366,
      height: 768
    }
  });
  const page = await browser.newPage()
  await page.goto('https://www.baidu.com');
  const input_area = await page.$('#kw') //$ 定位一个元素
  await input_area.type('hello')
  const btn = await page.$('#su')
  await btn.click()
  // page.waitFor 等待元素显示  visible: true
  await page.waitFor('#content_left .op_dict_content', {
    visible: true
  });
  // page.$eval 获取文本
  let resTest = await page.$eval('#content_left .op_dict_content', ele =>
    ele.innerText
  )
  console.log(resTest)
}
run()