import { expect, test, waitForSemanticUiReady } from '../fixtures/semantic-ui'

test.describe('Semantic UI examples', () => {
  test('home page passes level 1 semantic smoke checks', async ({ page, consoleErrors }) => {
    await page.goto('/')
    await waitForSemanticUiReady(page, {
      rootTestId: 'home-page',
      waitForFonts: true
    })

    await expect(page).toHaveNoConsoleErrors(consoleErrors)
    await expect(page).toHaveNoHorizontalScroll()
    await expect(page.getByTestId('home-page')).toHaveNoTextOverflow({
      allowTruncate: true
    })
  })
})
