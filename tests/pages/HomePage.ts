import {Page, Locator, expect} from '@playwright/test'
import {tabTitleTexts} from '../test-data/language-home-texts'

export type HeaderButton = 'corporate' | 'exchange' | 'academy' | 'contactUs' | 'login'
const buttonTitleMap: Record<HeaderButton, keyof typeof tabTitleTexts['en']> = {
    corporate: 'corporate',
    exchange: 'exchange',
    academy: 'academy',
    contactUs: 'contactUs',
    login: 'login',
};
export class HomePage {

    // Header locators
    private corporateBtn: Locator;
    private exchangeBtn: Locator;
    private academyBtn: Locator;
    private contactUsBtn: Locator;
    private loginBtn: Locator;

    constructor(private page: Page) {
        // Header locators
        this.corporateBtn = page.locator('#next-layout > header > nav > ul > li:nth-child(1)').nth(0)
        this.exchangeBtn = page.locator('#next-layout > header > nav > ul > li:nth-child(2)').nth(0)
        this.academyBtn = page.locator('#next-layout > header > nav > ul > li:nth-child(3)').nth(0)
        this.contactUsBtn = page.locator('#next-layout > header > nav > ul > li:nth-child(4)').nth(0)
        this.loginBtn = page.locator('#next-layout > header > nav > ul > li:nth-child(5)').nth(0)
    }

    private buttonUrlMap: Record<HeaderButton, string> = {
        corporate: '/corporate',
        exchange: '/exchange',
        academy: '/academy',
        contactUs: '/contact',
        login: '/login',
    };

    async goto(langCode: string) {
        await this.page.goto(`/${langCode}/`);
    }

    async navigateTo(button: HeaderButton): Promise<void> {
        const buttonLocator = this.getLocator(button);
        await expect(buttonLocator).toBeVisible();
        await buttonLocator.click();
    }

    async verifyPageUrl(button: HeaderButton, language: string): Promise<void> {
        const expectedUrl = `${this.page.url().split('/').slice(0, 3).join('/')}/${language}${this.buttonUrlMap[button]}/`;
        await expect(this.page).toHaveURL(expectedUrl);
    }

    async verifyPageTitle(button: HeaderButton, language: keyof typeof tabTitleTexts): Promise<void> {
        const expectedTitle = tabTitleTexts[language][buttonTitleMap[button]];
        await expect(this.page).toHaveTitle(expectedTitle);
    }

    async verifyTexts(texts: { [key: string]: { value: string; attribute?: string; locator?: string } }) {
        for (const [key, { value, attribute, locator }] of Object.entries(texts)) {
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

    async verifyNavigationBarFieldsVisible() {
        await expect(this.corporateBtn).toBeVisible();
        await expect(this.exchangeBtn).toBeVisible();
        await expect(this.academyBtn).toBeVisible();
        await expect(this.contactUsBtn).toBeVisible();
        await expect(this.loginBtn).toBeVisible();
    }
    private getLocator(key: string): Locator {
        switch (key) {
            case 'corporate': return this.corporateBtn;
            case 'exchange': return this.exchangeBtn;
            case 'academy': return this.academyBtn;
            case 'contactUs': return this.contactUsBtn;
            case 'login': return this.loginBtn;
            default: throw new Error(`Unknown text key: ${key}`);
        }
    }
}