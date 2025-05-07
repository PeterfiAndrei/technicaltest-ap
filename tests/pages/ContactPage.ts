import {Page, Locator, expect} from '@playwright/test';

export class ContactPage {
    // Header locators
    private contactUs: Locator;
    private contactUsSubheader: Locator;
    private contactUsDescription: Locator;
    private frequentlyAskedQuestions: Locator;


    // Form field locators
    private reasonDropdown: Locator
    private nameField: Locator
    private emailField: Locator
    private phoneField: Locator
    private messageField: Locator
    private createTicketCheckbox: Locator
    private confirmTCCheckbox: Locator
    private submitBtn: Locator
    private successMessage: Locator
    // Label locators
    private reasonLabel: Locator;
    private nameLabel: Locator;
    private emailLabel: Locator;
    private phoneLabel: Locator;
    private messageLabel: Locator;
    private createTicketLabel: Locator;
    private confirmTCLabel: Locator;
    private reasonOptionsList: Locator;
    // form error message
    private formReasonError: Locator;
    private formNameError: Locator;
    private formEmailError: Locator;
    private formPhoneError: Locator;
    private messageError: Locator;
    private termsError: Locator;

    constructor(private page: Page) {
        // Header locators
        this.contactUs = page.locator('.container .mb-4').nth(0)
        this.contactUsSubheader = page.locator('.container .mb-4').nth(1)
        this.contactUsDescription = page.locator('.container .mb-3.text-lg')
        this.frequentlyAskedQuestions = page.locator('[classname="alt-header py-4"]')

        // Form field locators
        this.reasonDropdown = page.getByTestId("contact-form-reasons");
        this.nameField = page.getByTestId("contact-form-name");
        this.emailField = page.getByTestId("contact-form-email");
        this.phoneField = page.getByTestId("contact-form-phone");
        this.messageField = page.getByTestId("contact-form-message");
        this.createTicketCheckbox = page.getByTestId("contact-form-zendesk");
        this.confirmTCCheckbox = page.getByTestId("contact-form-terms")
        this.submitBtn = page.getByTestId("contact-form-submitBtn");
        this.successMessage = page.getByTestId('contact-form-success');
        // Label locators
        this.reasonLabel = page.locator(".mt-1 .mb-4.mt-6:nth-of-type(1)")
        this.nameLabel = page.locator(".mt-1 .mb-4.mt-6:nth-of-type(2)")
        this.emailLabel = page.locator(".mt-1 .mb-4.mt-6:nth-of-type(3)")
        this.phoneLabel = page.locator(".mt-1 .mb-4.mt-6:nth-of-type(4) .text-base")
        this.messageLabel = page.locator(".mt-1 .mb-4.mt-6:nth-of-type(5)  .mud-input-label.text-base")
        this.createTicketLabel = page.locator('.mud-checkbox:nth-of-type(1) .mud-typography').first();
        this.confirmTCLabel = page.locator('.mud-checkbox:nth-of-type(1) .mud-typography').nth(1);
        this.reasonOptionsList = page.locator('.mud-list [tabindex="0"]');
        // form error message
        this.formReasonError = page.getByTestId('contact-form-reasons-error');
        this.formNameError = page.getByTestId('contact-form-name-error');
        this.formEmailError = page.getByTestId('contact-form-email-error');
        this.formPhoneError = page.getByTestId('contact-form-phone-error');
        this.messageError = page.getByTestId('contact-form-message-error');
        this.termsError = page.locator('.container .mud-typography.mud-error-text');
    }

    async goto(langCode: string) {
        await this.page.goto(`/${langCode}/contact`);
    }

    async fillForm({
                       reason = '',
                       name = '',
                       email = '',
                       phone = '',
                       message = '',
                       createTicket = false,
                       confirmTC = false,
                   }: {
        reason?: string;
        name?: string;
        email?: string;
        phone?: string;
        message?: string;
        createTicket?: boolean;
        confirmTC?: boolean;
    }) {
        if (reason) {
            await this.reasonDropdown.click();
            await this.reasonOptionsList.filter({ hasText: reason }).first().click();
        }
        if (name) await this.nameField.fill(name);
        if (email) await this.emailField.fill(email);
        if (phone) await this.phoneField.fill(phone);
        if (message) await this.messageField.fill(message);
        if (createTicket) await this.createTicketCheckbox.check();
        if (confirmTC) await this.confirmTCCheckbox.check();
    }

    async submit() {
        await this.submitBtn.click();
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

    async verifyFormFieldsVisible() {
        await expect(this.reasonDropdown).toBeVisible();
        await expect(this.nameField).toBeVisible();
        await expect(this.emailField).toBeVisible();
        await expect(this.phoneField).toBeVisible();
        await expect(this.messageField).toBeVisible();
        await expect(this.createTicketCheckbox).toBeVisible();
        await expect(this.confirmTCCheckbox).toBeVisible();
        await expect(this.submitBtn).toBeVisible();
    }

    async verifyReasonOptions(options: string[]) {
        await this.reasonDropdown.click()
        let i = 0
        for (const option of options) {
            await expect(this.reasonOptionsList.nth(i)).toContainText(option);
            i++
        }
    }

    getSuccessMessage() {
        return this.successMessage;
    }

    getTermsErrorMessage() {
        return this.termsError;
    }

    private getLocator(key: string): Locator {
        switch (key) {
            case 'reasonLabel': return this.reasonLabel;
            case 'nameLabel': return this.nameLabel;
            case 'emailLabel': return this.emailLabel;
            case 'phoneLabel': return this.phoneLabel;
            case 'messageLabel': return this.messageLabel;
            case 'createTicketLabel': return this.createTicketLabel;
            case 'confirmTCLabel': return this.confirmTCLabel;
            case 'submitButton': return this.submitBtn;
            case 'reasonPlaceholder': return this.reasonDropdown;
            case 'namePlaceholder': return this.nameField;
            case 'emailPlaceholder': return this.emailField;
            case 'phonePlaceholder': return this.phoneField;
            case 'messagePlaceholder': return this.messageField;
            case 'successMessage': return this.successMessage;
            case 'reasonError': return this.formReasonError;
            case 'nameError': return this.formNameError;
            case 'emailError': return this.formEmailError;
            case 'phoneError': return this.formPhoneError;
            case 'messageError': return this.messageError;
            case 'termsError': return this.termsError;
            case 'contactUs': return this.contactUs;
            case 'contactUsSubheader': return this.contactUsSubheader;
            case 'contactUsDescription': return this.contactUsDescription;
            case 'frequentlyAskedQuestions': return this.frequentlyAskedQuestions;
            default: throw new Error(`Unknown text key: ${key}`);
        }
    }
}