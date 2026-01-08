import { Locator, Page } from "@playwright/test"

export class AuthPage {
    get loginHeading() { return this.page.getByRole('heading', { name: 'Login' }) }
    get usernameField() { return this.page.locator('#username') }
    get passwordField() { return this.page.locator('#password') }
    get loginButton() { return this.page.getByRole('button', { name: 'Login' }) }
    get welcomeHeading() { return this.page.getByRole('heading', { name: 'Welcome, testuser!' }) }
    get invalidLoginHeading() { return this.page.getByRole('heading', { name: 'Invalid credentials.' }) }
    get protectedHeading() { return this.page.getByRole('heading', { name: 'Protected Route' }) }

    constructor (readonly page: Page) {}
}
