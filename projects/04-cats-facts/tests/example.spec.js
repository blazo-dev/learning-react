// @ts-check
import { test, expect } from '@playwright/test'

const LOCALHOST_URL = 'http://localhost:5173'
const CAT_PREFIX_IMAGE = `https://cataas.com`

test('should show random fact and an image', async ({ page }) => {
  await page.goto(LOCALHOST_URL)
  const text = await page.textContent('.card__description')
  const imageSrc = await page.getAttribute('.card__image', 'src')

  expect(text?.length).toBeGreaterThan(0)
  expect(imageSrc?.startsWith(CAT_PREFIX_IMAGE)).toBeTruthy()
})
