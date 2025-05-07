import {test} from '@playwright/test'
import {acceptCookies} from "../../utils/cookie-utils"
import {languageTexts} from '../../test-data/language-home-texts'
import {HomePage, HeaderButton} from "../../pages/HomePage";

test.describe('Home Page Tests', () => {
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
        const {headers} = languageTexts[language];
        await homePage.verifyNavigationBarFieldsVisible()
        await homePage.verifyTexts(headers)
    });

    test('should navigate to each header page and verify URL', async () => {
        const headerButtons: Array<HeaderButton> = ['corporate', 'exchange', 'academy', 'contactUs', 'login'];

        for (const button of headerButtons) {
            await homePage.navigateTo(button);
            await homePage.verifyPageUrl(button, language);
            await homePage.goto(language);
        }
    });

    test('should navigate to each header page and verify title', async () => {
        const headerButtons: Array<HeaderButton> = ['corporate', 'exchange', 'academy', 'contactUs', 'login'];

        for (const button of headerButtons) {
            await homePage.navigateTo(button);
            await homePage.verifyPageTitle(button, language);
            await homePage.goto(language);
        }
    });
});
