import { expect, test, waitForSemanticUiReady } from '../fixtures/semantic-ui'
import { scanA11y } from '../helpers/semantic-ui/accessibility'

test.describe('Semantic UI axe spike', () => {
  test('inspects AxeBuilder result shape on home page', async ({ page }, testInfo) => {
    await page.goto('/')
    await waitForSemanticUiReady(page, {
      rootTestId: 'home-page',
      waitForFonts: true
    })

    const results = await scanA11y(page, testInfo, {
      include: '[data-testid="home-page"]',
      disableRules: ['color-contrast']
    })

    expect(results.violations).toEqual([])
  })
})
