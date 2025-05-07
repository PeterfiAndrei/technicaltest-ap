import {Page, Locator, expect} from '@playwright/test';

type tableList = 'depositTokenList' | 'exchangeTokenList' | 'withdrawalTokenList';

export class FeesPage {

    // Header locators
    private mainHeader: Locator;
    private depositHeader: Locator;
    private exchangeHeader: Locator;
    private withdrawalsHeader: Locator;
    private depositTokenList: Locator;
    private exchangeTokenList: Locator;
    private withdrawalTokenList: Locator;

    constructor(private page: Page) {
        // Header locators
        this.mainHeader = page.locator('.blazor-element .mud-container .mb-5.text-center')
        this.depositHeader = page.locator('.blazor-element .mud-paper:nth-of-type(1) h2')
        this.exchangeHeader = page.locator('.blazor-element .mud-paper:nth-of-type(2) h2')
        this.withdrawalsHeader = page.locator('.blazor-element .mud-paper:nth-of-type(3) h2')
        // Token list locators
        this.depositTokenList = page.locator('.mud-paper:nth-of-type(1) tr .p-3')
        this.exchangeTokenList = page.locator('.mud-paper:nth-of-type(2) tbody tr td:nth-of-type(1)')
        this.withdrawalTokenList = page.locator('.mud-paper:nth-of-type(3) tbody tr td:nth-of-type(1)')
    }

    async goto(langCode: string) {
        await this.page.goto(`/${langCode}/policies/fees/`);
    }

    async verifyTexts(texts: { [key: string]: { value: string; attribute?: string; locator?: string } }) {
        for (const [key, {value, attribute, locator}] of Object.entries(texts)) {
            const element = locator ? this.page.locator(locator) : this.getLocator(key);
            if (attribute) {
                await expect(element).toHaveAttribute(attribute, value);
            } else {
                // Normalize text by trimming and collapsing multiple spaces/newlines
                const normalizedText = await element.textContent().then(text => text?.trim().replace(/\s+/g, ' '));
                await expect(normalizedText).toBe(value);
            }
        }
    }

    async verifyTokenListSortedAlphabetically(listType: tableList) {
        const tokenListLocator = this.getLocator(listType);
        const tokenTexts = await tokenListLocator.allTextContents();
        const normalizedTexts = tokenTexts.map(text => text.trim().toLowerCase());
        const sortedTexts = [...normalizedTexts].sort((a, b) => a.localeCompare(b));
        expect(normalizedTexts).toEqual(sortedTexts);
    }

    private getLocator(key: string): Locator {
        switch (key) {
            case 'mainHeader':
                return this.mainHeader;
            case 'depositHeader':
                return this.depositHeader;
            case 'exchangeHeader':
                return this.exchangeHeader;
            case 'withdrawalsHeader':
                return this.withdrawalsHeader;
            case 'depositTokenList':
                return this.depositTokenList;
            case 'exchangeTokenList':
                return this.exchangeTokenList;
            case 'withdrawalTokenList':
                return this.withdrawalTokenList;
            default:
                throw new Error(`Unknown text key: ${key}`);
        }
    }
}