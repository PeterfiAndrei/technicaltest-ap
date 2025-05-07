import {test} from '@playwright/test'
import {FeesPage} from '../../pages/policies/FeesPage'
import {acceptCookies} from "../../utils/cookie-utils"
import {languageTexts} from '../../test-data/policies/language-fees-texts'

test.describe('Fees Page Tests', () => {
    let feesPage: FeesPage;
    let language: keyof typeof languageTexts;
    test.beforeEach(async ({page}, testInfo) => {
        feesPage = new FeesPage(page);
        // @ts-ignore
        language = testInfo.project.use.language as keyof typeof languageTexts;
        if (!language || !languageTexts[language]) {
            throw new Error(`Language ${language} not found in languageTexts`);
        }
        const {acceptCookiesText} = languageTexts[language];
        await feesPage.goto(language);
        await acceptCookies(page, acceptCookiesText);
    });

    test('should display correct Headers', async () => {
        if (!language || !languageTexts[language]) {
            throw new Error(`Language ${language} not found in languageTexts`);
        }
        const {headers} = languageTexts[language];
        await feesPage.verifyTexts(headers)
    });

    test('should have alphabetically sorted token lists', async () => {
        await feesPage.verifyTokenListSortedAlphabetically('depositTokenList');
        await feesPage.verifyTokenListSortedAlphabetically('exchangeTokenList');
        await feesPage.verifyTokenListSortedAlphabetically('withdrawalTokenList');
    });
});
