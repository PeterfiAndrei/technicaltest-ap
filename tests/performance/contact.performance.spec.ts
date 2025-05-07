import {test, expect} from '@playwright/test';
import {generateValidEmail} from "../utils/generateValidEmail";
import {ContactPage} from "../pages/ContactPage";
import {languageTexts} from "../test-data/language-contact-texts";


let contactPage: ContactPage;
let language: keyof typeof languageTexts;

test.describe('Contact Form Tests', () => {

    test.beforeEach(async ({page}, testInfo) => {
        contactPage = new ContactPage(page);
        // @ts-ignore
        language = testInfo.project.use.language as keyof typeof languageTexts;
        if (!language || !languageTexts[language]) {
            throw new Error(`Language ${language} not found in languageTexts`);
        }
    });

    test('Contact page response within 1s', async ({page}) => {
        contactPage = new ContactPage(page);
        await page.route('**/contact', async (route) => {
            if (route.request().method() !== 'GET') {
                return route.continue()
            }
            const start = performance.now()
            const response = await route.fetch()
            const duration = performance.now() - start
            console.log("Response duration:" + duration)
            expect(duration).toBeLessThan(1000)
            await route.fulfill({response})
        })
        await contactPage.goto(language);
    })
})