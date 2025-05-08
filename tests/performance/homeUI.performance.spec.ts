import {chromium} from 'playwright';
import {playAudit} from 'playwright-lighthouse';
import {test} from '@playwright/test';
import {languageTexts} from "../test-data/language-contact-texts";
import {HomePage} from "../pages/HomePage";

let language: keyof typeof languageTexts;
let homePage: HomePage;

test.describe('Playwright home page audits using lighthouse', () => {
    test.beforeEach(async ({page}, testInfo) => {
        test.setTimeout(90000);
        homePage = new HomePage(page);
        // @ts-ignore
        language = testInfo.project.use.language as keyof typeof languageTexts;
        if (!language || !languageTexts[language]) {
            throw new Error(`Language ${language} not found in languageTexts`);
        }
        await homePage.goto(language);
    });

    test('perform audit on the contact page with custom score for all categories', async ({page}, testInfo) => {
        test.skip(!testInfo.project.name.startsWith('chromium'), 'Lighthouse audits are only supported on Chromium browsers.');
        const browser = await chromium.launch({
            args: ['--remote-debugging-port=9222'],
            headless: true,
        });

        try {
            const auditPage = await browser.newPage();
            await auditPage.goto(page.url());
            await playAudit({
                page: auditPage,
                port: 9222,
                thresholds: {
                    performance: 50,
                    accessibility: 70,
                    'best-practices': 50,
                    seo: 70,
                    pwa: 50,
                },
            });
        } finally {
            await browser.close();
        }
    });
});