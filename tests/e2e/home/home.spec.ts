import {test, expect} from '@playwright/test'
import {ContactPage} from '../../pages/ContactPage'
import {acceptCookies} from "../../utils/cookie-utils"
import {languageTexts} from '../../test-data/language-home'
import {HomePage} from "../../pages/HomePage";

test.describe('Contact Form Tests', () => {
    let homePage: HomePage;
    let language: keyof typeof languageTexts;
    test.beforeEach(async ({page}, testInfo) => {
        homePage = new HomePage(page);
        // @ts-ignore
        language = testInfo.project.use.language as keyof typeof languageTexts;
        if (!language || !languageTexts[language]) {
            throw new Error(`Language ${language} not found in languageTexts`);
        }
        const {acceptCookiesText} = languageTexts[language];
        await homePage.goto(language);
        await acceptCookies(page, acceptCookiesText);
    });

    test('should display correct Navigation Bar Fields', async () => {
        if (!language || !languageTexts[language]) {
            throw new Error(`Language ${language} not found in languageTexts`);
        }
        const {headers} = languageTexts[language];
        await homePage.verifyNavigationBarFieldsVisible()
        await homePage.verifyTexts(headers)
    });
});
