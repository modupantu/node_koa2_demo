const pupputeer = require('puppeteer');
async function login() {
  const browser = await pupputeer.launch({
    headless: false
  })
  const page = await browser.newPage();
  await page.goto('https://login.anjuke.com/login/form')

  // 切换iframe
  // page.frames() 取出所有的frame元素
  await page.frames().map(frame => {
    console.log(frame.url()); //找到页面中所有的url

  })
  const targetFrameUrl = 'https://login.anjuke.com/login/iframeform'
  const frame = await page.frames().find(frame => frame.url().includes(targetFrameUrl))
  const phone = await frame.waitForSelector('#phoneIpt')
  await phone.type('13244443333', {
    delay: 2
  })
}
login()