import { chromium } from 'playwright'
import { mkdirSync } from 'node:fs'

const projects = [
  { slug: 'tradehub', url: 'https://multi-vender-pi.vercel.app/', wait: 5500 },
  { slug: 'indore-bazar', url: 'https://indore-bazar-1.vercel.app/', wait: 5500 },
  { slug: 'kaamkaro', url: 'https://kaam-karo-wri3.vercel.app/', wait: 5500 },
  { slug: 'gymhub', url: 'https://find-gym-theta.vercel.app/', wait: 5500 },
  { slug: 'skinlova', url: 'https://skin-lova.vercel.app/', wait: 5500 },
]

mkdirSync('public/projects', { recursive: true })

const browser = await chromium.launch({
  channel: 'chrome',
  headless: true,
})

const ctx = await browser.newContext({
  viewport: { width: 1280, height: 800 },
  deviceScaleFactor: 1.5,
})

for (const p of projects) {
  const page = await ctx.newPage()
  try {
    await page.goto(p.url, { waitUntil: 'domcontentloaded', timeout: 45000 })
    await page.waitForTimeout(p.wait)
    await page.screenshot({
      path: `public/projects/${p.slug}.jpg`,
      fullPage: false,
      type: 'jpeg',
      quality: 78,
    })
    console.log(`OK ${p.slug}`)
  } catch (err) {
    console.log(`FAIL ${p.slug}: ${err instanceof Error ? err.message : err}`)
  }
  await page.close()
}

await ctx.close()
await browser.close()
console.log('done')