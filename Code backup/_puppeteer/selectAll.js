/**
 *name: 获取多个元素
 *description: 
 *@author:  魔都叛徒
 *@date: 2019-11-28 
 */
const puppeteer = require('puppeteer')
async function phone() {
  const browser = await puppeteer.launch({
    headless: false
  })
  const page = await browser.newPage()
  await page.goto('https://list.tmall.com/search_product.htm?q=%E6%89%8B%E6%9C%BA&ali_trackid=2:mm_26632258_3504122_57418735:1574956495_213_1377794453&clk1=0bf86242d007140959aa8e170713a90a&upsid=0bf86242d007140959aa8e170713a90a')
  const input = await page.$('#mq');

  await input.type('手机');
  await page.keyboard.press('Enter')
  await page.waitForSelector('.product-iWrap');

  const list = await page.$$eval('.product-iWrap', eles => eles.map(ele => ele.innerText))
  console.log(list)
}
phone()