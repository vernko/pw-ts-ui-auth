import { test, expect } from '@playwright/test';
import { HomePage } from '../POM/PlaywrightHomePage';
import { click, fillField, getTextContent } from './helpers/utils'

let homePage: HomePage;

test.beforeEach(async ({ page }) => {
    homePage = new HomePage(page);
    await page.goto('https://playwright.dev/')
})

test('homepage H1 heading contains correct content', async ({ page }) => {
    const mainHeadingText = 'Playwright enables reliable end-to-end testing for modern web apps.'
    
    await expect(homePage.mainHomeHeading).toHaveText(mainHeadingText)
})

test('homepage feature section matches visual snapshot', async ({ page }) => {
    await expect(homePage.featuresSection).toHaveScreenshot('features.png')
})

test('homepage footer matches visual snapshot', async ({ page }) => {
    await expect(homePage.footerSection).toHaveScreenshot('footer.png')
})

test('homepage footer contains Microsoft copyright with current year', async ({ page }) => {
    await expect(homePage.footerCopyright).toMatchAriaSnapshot(`
        - text: /Copyright © \\d{4} Microsoft/
    `)
})

test('search navigates to locators documentation page', async ({ page }) => {
    const searchText = 'Locators'

    click(homePage.searchBar)
    fillField(homePage.SearchField, searchText)
    click(homePage.searchItem)
    await expect(page).toHaveURL(/\/docs\/locators/)
})

