import { test, expect } from '@playwright/test'
import { AuthPage } from '../POM/AuthPage'
import { click, fillField, getTextContent } from './helpers/utils'

const AUTH_FILE = 'playwright/.auth/user.json'
const username = 'testuser'
const password = 'testpass'
let authPage:AuthPage

test.beforeEach(async ({ page }) => {
    authPage = new AuthPage(page)
    await page.goto('http://localhost:3000/')
    expect(authPage.loginHeading).toBeVisible()
})

test('login state is saved succesfully after user logs in clicking login button', async ({ page }) => {
    await fillField(authPage.usernameField, username)
    await fillField(authPage.passwordField, password)
    await click(authPage.loginButton)

    await expect(authPage.welcomeHeading).toBeVisible()

    await page.context().storageState({ path: AUTH_FILE })

    const fs = require('fs')
    expect(fs.existsSync(AUTH_FILE)).toBeTruthy()
})

test('login state is saved succesfully after user logs in using enter', async ({ page }) => {
    await fillField(authPage.usernameField, username)
    await fillField(authPage.passwordField, password)
    await authPage.passwordField.press('Enter')

    await expect(authPage.welcomeHeading).toBeVisible()

    await page.context().storageState({ path: AUTH_FILE })

    const fs = require('fs')
    expect(fs.existsSync(AUTH_FILE)).toBeTruthy()
})