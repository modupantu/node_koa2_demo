const puppeteer = require('puppeteer')
async function aliyun() {
  const browser = await puppeteer.launch({
    headless: false,
    ignoreDefaultArgs: ['--enable-automation']
  })
  const page = await browser.newPage();
  // 
  await page.goto('https://account.aliyun.com/register/register.htm', {
    waitUntil: 'networkidle2'
  })
  // await page.evaluate(async () => {
  //   Object.defineProperty(navigator, 'webdriver', {
  //     get: () => false
  //   })
  // })
  const frame = await page.frames().find(frame => frame.url().includes('https://passport.aliyun.com'))
  const span = await frame.$('#nc_1_n1z')

  const spanInfo = await span.boundingBox() //获取元素的x y width height
  const div = await frame.$('div#nc_1__scale_text>span')
  console.log(div)
  const divInfo = await div.boundingBox();
  await page.mouse.move(spanInfo.x, spanInfo.y)
  await page.mouse.down();

  for (let i = 0; i < divInfo.width; i++) {
    await page.mouse.move(spanInfo.x + i, spanInfo.y)
  }
  await page.mouse.up()
}
aliyun()