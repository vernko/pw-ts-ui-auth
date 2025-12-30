import { test, expect } from '@playwright/test';
import { HomePage } from '../POM/HomePage';

let homePage: HomePage;

test.beforeEach(async ({ page }) => {
    homePage = new HomePage(page);
    await page.goto('https://playwright.dev/')
})

test('homepage H1 heading contains correct content', async ({ page }) => {
    const mainHeadingText = 'Playwright enables reliable end-to-end testing for modern web apps.'
    
    await expect(homePage.mainHomeHeading).toHaveText(mainHeadingText)
})

test('homepage footer contains Microsoft copyright with current year', async ({ page }) => {
    await expect(homePage.footerCopyright).toMatchAriaSnapshot(`
        - text: /Copyright © \\d{4} Microsoft/
    `)
})

test('search navigates to locators documentation page', async ({ page }) => {
    const searchText = 'Locators'

    homePage.click(homePage.searchBar)
    homePage.fillField(homePage.SearchField, searchText)
    homePage.click(homePage.searchItem)
    await expect(page).toHaveURL(/\/docs\/locators/)
})

