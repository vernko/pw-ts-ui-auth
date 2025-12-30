import { expect, Locator, Page } from "@playwright/test"

export class HomePage {
    get mainHomeHeading() { return this.page.locator('.hero__title') }
    get footerCopyright() { return this.page.locator('.footer__copyright') }
    get searchBar() { return this.page.locator('.DocSearch-Button-Container') }
    get SearchField() { return this.page.locator('#docsearch-input') }
    get searchItem() { return this.page.getByRole('link', { name: 'Locators', exact: true }) }

    constructor (readonly page: Page) {}
    
    async click(locator: Locator) {
        await locator.click()
    }

    async fillField(locator: Locator, text: string) {
        await locator.fill(text)
    }

    async getTextContent(locator: Locator) {
        return await locator.textContent()
    }
}