import {test} from '@playwright/test'
import {acceptCookies} from "../../utils/cookie-utils"
import {languageTexts} from '../../test-data/language-home-texts'
import {HomePage} from "../../pages/HomePage";
import {generateValidEmail} from "../../utils/generateValidEmail";

test.describe('Subscribe Tests', () => {
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


    test('Subscribe with valid email', async () => {
        const {subscribeSuccess} = languageTexts[language];

        await homePage.fillSubscribeField(generateValidEmail());
        await homePage.clickSubscribeButton();
        await homePage.verifySubscribeSuccessMessage(subscribeSuccess);
    });


    const invalidEmails = [
        'plainaddress',
        'missingatsign.com',
        'missingdomain@',
        'admin@dwok..com',
        '@nodomain.com',
        '   ',
    ];

    test.describe('Subscribe with invalid email', () => {
        invalidEmails.forEach((email) => {
            test(`should fail with invalid email: "${email}"`, async () => {
                const {subscribeError} = languageTexts[language];
                await homePage.fillSubscribeField(email);
                await homePage.clickSubscribeButton();
                await homePage.verifySubscribeErrorMessage(subscribeError);
            });
        });

    });

    test('should fail with empty email', async () => {
        const {emptyEmailError} = languageTexts[language];
        await homePage.fillSubscribeField('');
        await homePage.clickSubscribeButton();
        await homePage.verifySubscribeErrorMessage(emptyEmailError);
    });
});