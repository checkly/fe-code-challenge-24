import { test, expect } from '@playwright/test'

// See here how to get started:
// https://playwright.dev/docs/intro
test.describe('navigation', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/')
  })

  test('sidebar', async ({ page }) => {
    await expect(page).toHaveURL('checks')
  })

  test('root redirects to /checks', async ({ page }) => {
    await expect(page.getByRole('heading')).toHaveText('Reporting')
  })
})

test.describe('reporting page', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/checks')
  })

  test('header', async ({ page }) => {
    await expect(page.getByRole('heading')).toHaveText('Reporting')
  })

  test.describe('checks table', () => {
    test('all rows expandable', async ({ page }) => {
      const expandable = page.locator('.tr-expandable')
      await expect(expandable).toHaveCount(20)
    })

    test('no rows expanded', async ({ page }) => {
      const expanded = page.locator('.tr-active')
      await expect(expanded).toHaveCount(0)
    })
  })
})

test.describe('wrong stats URL', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/checks/no-such-check-id/stats')
  })

  test.describe('check not found', () => {})
})

test.describe("individual check's stats", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/checks/d3886662-8577-4421-bf41-256059028e38/stats')
  })

  test.describe('checks table', () => {
    test('active check rows expanded', async ({ page }) => {
      const expanded = page.locator('.tr-active')
      await expect(expanded).toHaveCount(2)
    })
  })
})
