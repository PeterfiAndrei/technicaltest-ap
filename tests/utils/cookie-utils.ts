import {Page, expect} from "@playwright/test";


export async function acceptCookies(page: Page, acceptButtonText: string): Promise<void> {
    const acceptButton = page.getByText(acceptButtonText, { exact: true });
    if (await acceptButton.isVisible()) {
        await acceptButton.click();
        await expect(acceptButton).not.toBeVisible();
    }
}
