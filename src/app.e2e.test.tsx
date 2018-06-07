import * as puppeteer from 'puppeteer'
import * as faker from 'faker'
import 'jest'

jasmine.DEFAULT_TIMEOUT_INTERVAL = 16000

let browser, page

beforeAll(async () => {
  browser = await puppeteer.launch({
    executablePath: '/usr/bin/chromium-browser',
  })

  page = await browser.newPage()
  await page.goto('http://localhost:3000')
  page.setViewport({ width: 500, height: 1000 })
})

afterAll(() => {
  browser.close()
})

describe('contact-us form', () => {
  it('Renders without crashing', async () => {
    const html = await page.$eval('.form-wrapper__title', e => e.innerHTML)
    expect(html).toBe('Contact Us')
  })

  it(
    'is submitted successfully',
    async () => {
      const contactData = {
        email: faker.internet.email(),
        firstName: faker.name.firstName(),
        lastName: faker.name.lastName(),
        message: faker.lorem.text(2),
      }

      await page.click('[data-test-id="name-field"]')
      await page.type(
        '[data-test-id="name-field"]',
        `${contactData.firstName} ${contactData.lastName}`
      )

      await page.click('[data-test-id="email-field"]')
      await page.type('[data-test-id="email-field"]', contactData.email)

      await page.click('[data-test-id="message-field"]')
      await page.type('[data-test-id="message-field"]', contactData.message)

      await page.click('[data-test-id="submit-button"]')
      await page.waitForSelector('[data-test-id="submit-message"]')
    },
    4000
  )
})
