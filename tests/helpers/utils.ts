import { expect, Page, Locator } from '@playwright/test';

export async function click(locator: Locator) {
    await locator.click()
}

export async function fillField(locator: Locator, text: string) {
    await locator.fill(text)
}

export async function getTextContent(locator: Locator) {
    return await locator.textContent()
}