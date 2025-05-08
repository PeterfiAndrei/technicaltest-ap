# 🧪 Tokero App Automation

This project automates the testing of the Tokero application using [Playwright](https://playwright.dev/) and [Allure Reports](https://docs.qameta.io/allure/).

---

## 🛠 Configuration
The project is configured to run tests in multiple languages (en, ro, fr) and browsers. You can modify the configuration in the playwright.config.ts file.

### 📂 Folder Structure
* tests/: Contains all test files.
* tests/pages/: Page Object Model (POM) classes for different pages.
* tests/utils/: Utility functions used across tests.
* tests/test-data/: Test data for different languages and scenarios.
---

### 🧪 Supported Features
* Cross-browser testing: Tests can run on Chromium, Firefox, and WebKit.
* Localization testing: Supports English (en), Romanian (ro), and French (fr).
* Performance audits: Lighthouse audits for performance, accessibility, SEO, and more.
* Allure reporting: Detailed test reports with screenshots and videos.
---

### 📝 Notes
* Ensure that the baseURL in playwright.config.ts matches the environment you are testing.
* For CI environments, tests run in headless mode by default.

---

## ⚙️ Setup
### 1. Clone the repository
Clone the project to your local machine:
```bash
  git clone https://github.com/PeterfiAndrei/technicaltest-ap.git
```

### 2. Install dependencies
```bash
    npm install
```
### 3. Install Allure CLI
To generate and view test reports, install the Allure Command Line Interface (CLI). Below are the available installation methods:
<details> <summary>🔧 Click for Allure CLI installation methods</summary>
🟢 Method 1 – NPM (recommended)

```bash
    npm install -g allure-commandline --save-dev
```

🍏 Method 2 – Homebrew (for macOS)
```bash
    brew install allure
```
📦 Method 3 – Scoop (for Windows)
```bash
  scoop install allure
```
</details>

#
#
## 🚀 Running Tests
Run all tests:
```bash
    npx playwright test
```

Run tests in headed mode (with UI):
```bash
    npx playwright test --headed
```

Run tests for a specific project (e.g., chromium-en):
```bash
    npx playwright test --project=chromium-en
```


## 📊 Generating Allure Reports
1. Generate & open the report:
```bash
    npx allure generate allure-results --clean ; npx allure open
```
2. Open the report in the browser:
```bash
    npm run allure:open
```
3. Clean the report:
```bash
    npm run allure:clean