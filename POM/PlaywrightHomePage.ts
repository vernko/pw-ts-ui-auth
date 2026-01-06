import { Locator, Page } from "@playwright/test"

export class HomePage {
    get heroHeader() { return this.page.locator('.hero') }
    get mainHomeHeading() { return this.page.locator('.hero__title') }
    get featuresSection() { return this.page.locator('.features_keug')}
    get footerCopyright() { return this.page.locator('.footer__copyright') }
    get footerSection() { return this.page.locator('footer') }
    get searchBar() { return this.page.locator('.DocSearch-Button-Container') }
    get SearchField() { return this.page.locator('#docsearch-input') }
    get searchItem() { return this.page.getByRole('link', { name: 'Locators', exact: true }) }

    constructor (readonly page: Page) {}
}