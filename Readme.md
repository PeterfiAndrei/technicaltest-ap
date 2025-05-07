# 🧪 Tokero App Automation

This project automates the testing of the Tokero page form using [Playwright](https://playwright.dev/) and [Allure Reports](https://docs.qameta.io/allure/).

---

## ⚙️ Setup

### 1. Install dependencies
```bash
    npm install
```
### 2. Install Allure CLI
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

### 3. 🚀 Run tests
Run all tests:
```bash
    npx playwright test
```

Run with UI (non-headless):
```bash
    npx playwright test --headed
```
### 4. 📊 Generate Allure report
1. Generate the report:
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