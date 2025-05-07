import {test, expect} from '@playwright/test'
import {ContactPage} from '../../pages/ContactPage'
import {generateValidEmail} from "../../utils/generateValidEmail";
import {acceptCookies} from "../../utils/cookie-utils"
import {languageTexts} from '../../test-data/language-contact-texts'

test.describe('Contact Form Tests', () => {
    let contactPage: ContactPage;
    let language: keyof typeof languageTexts;
    test.beforeEach(async ({page}, testInfo) => {
        contactPage = new ContactPage(page);
        // @ts-ignore
        language = testInfo.project.use.language as keyof typeof languageTexts;
        if (!language || !languageTexts[language]) {
            throw new Error(`Language ${language} not found in languageTexts`);
        }
        const {acceptCookiesText} = languageTexts[language];
        await contactPage.goto(language);
        await acceptCookies(page, acceptCookiesText);
    });

    test('should display correct language content', async () => {
        if (!language || !languageTexts[language]) {
            throw new Error(`Language ${language} not found in languageTexts`);
        }
        const {texts, reasonOptions} = languageTexts[language];
        await contactPage.verifyTexts(texts);
        await contactPage.verifyFormFieldsVisible();
        await contactPage.verifyReasonOptions(reasonOptions);
    });

    test('should display correct headers', async () => {
        if (!language || !languageTexts[language]) {
            throw new Error(`Language ${language} not found in languageTexts`);
        }
        const {headers} = languageTexts[language];
        await contactPage.verifyTexts(headers);
    });

    test('should display correct placeholder content', async () => {
        if (!language || !languageTexts[language]) {
            throw new Error(`Language ${language} not found in languageTexts`);
        }
        const {placeholders} = languageTexts[language];
        await contactPage.verifyTexts(placeholders);
    });

    // TODO: To be enabled when captcha is removed (and update the test)
    test.skip('should submit form successfully with all fields', async () => {
        if (!language || !languageTexts[language]) {
            throw new Error(`Language ${language} not found in languageTexts`);
        }
        const { reasonOptions, successMessage} = languageTexts[language];
        await contactPage.fillForm({
            reason: reasonOptions[0],
            name: 'Test User',
            email: generateValidEmail(),
            phone: '1234567890',
            message: 'This is a test message',
            createTicket: true,
            confirmTC: true,
        });
        await contactPage.submit();
        await expect(contactPage.getSuccessMessage()).toHaveText(successMessage.value);
    });

    // TODO: To be enabled when captcha is removed (and update the test)
    test.skip('should submit form successfully without optional fields', async () => {
        if (!language || !languageTexts[language]) {
            throw new Error(`Language ${language} not found in languageTexts`);
        }
        const { reasonOptions, successMessage} = languageTexts[language];
        await contactPage.fillForm({
            reason: reasonOptions[0],
            name: 'Test User',
            email: generateValidEmail(),
            message: 'This is a test message',
            confirmTC: true,
        });
        await contactPage.submit();
        await expect(contactPage.getSuccessMessage()).toHaveText(successMessage.value);
    });

    test('should show validation errors for missing required fields', async () => {
        if (!language || !languageTexts[language]) {
            throw new Error(`Language ${language} not found in languageTexts`);
        }
        const {errorTexts} = languageTexts[language];
        await contactPage.submit();
        await contactPage.verifyTexts(errorTexts);
    });

    test('should show validation errors for unchecked terms', async () => {
        if (!language || !languageTexts[language]) {
            throw new Error(`Language ${language} not found in languageTexts`);
        }
        const {reasonOptions, errorTexts} = languageTexts[language];
        await contactPage.fillForm({
            reason: reasonOptions[0],
            name: 'Test User',
            email: generateValidEmail(),
            message: 'This is a test message',
        });
        await contactPage.submit();
        // await contactPage.delay(8000); // Wait for error messages to appear
        await expect(contactPage.getTermsErrorMessage()).toHaveText(errorTexts.termsError.value);
    });
});
