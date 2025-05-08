import { defineConfig, devices } from '@playwright/test';

const isCI = !!process.env.CI;
export default defineConfig({
  testDir: './tests',
  timeout: 30 * 1000,
  expect: {
    timeout: 5000,
  },
  fullyParallel: true,
  retries: process.env.CI ? 1 : 1,
  workers: process.env.CI ? 1 : undefined,
  reporter: [
    ['line'],
    ['allure-playwright', { outputFolder: 'allure-results', suiteTitle: true }],
  ],
  use: {
    actionTimeout: 0,
    trace: 'on-first-retry',
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
    headless: isCI, // Run tests in non-headless mode locally
    testIdAttribute: "id",
    baseURL: "https://tokero.dev/en/"
  },
  projects: [
    {
      name: 'chromium-en',
      use: {
        ...devices['Desktop Chrome'],
        contextOptions: { locale: 'en-US' },
        language: 'en',
        headless: isCI,
      },
    },
    {
      name: 'chromium-ro',
      use: {
        ...devices['Desktop Chrome'],
        contextOptions: { locale: 'ro-RO' },
        language: 'ro',
        headless: isCI,
      },
    },
    {
      name: 'chromium-fr',
      use: {
        ...devices['Desktop Chrome'],
        contextOptions: { locale: 'fr-FR' },
        language: 'fr',
        headless: isCI,
      },
    },
    // {
    //   name: 'firefox-en',
    //   use: {
    //     ...devices['Desktop Firefox'],
    //     contextOptions: { locale: 'en-US' },
    //     language: 'en',
    //     headless: isCI,
    //   },
    // },
    // {
    //   name: 'firefox-ro',
    //   use: {
    //     ...devices['Desktop Firefox'],
    //     contextOptions: { locale: 'ro-RO' },
    //     language: 'ro',
    //     headless: isCI,
    //   },
    // },
    // {
    //   name: 'firefox-fr',
    //   use: {
    //     ...devices['Desktop Firefox'],
    //     contextOptions: { locale: 'fr-FR' },
    //     language: 'fr',
    //     headless: isCI,
    //   },
    // },
  ],
});
