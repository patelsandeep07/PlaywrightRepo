# Playwright Automation Framework

A modern end-to-end web testing framework built with **[Playwright](https://playwright.dev/)**, **JavaScript / TypeScript**, and integrated test runner reporting. Designed for fast, reliable, and multi-browser automated testing.

---

## 🚀 Features

- **Multi-Browser Testing**: Executes tests seamlessly across Chromium (Chrome, Edge), Firefox, and WebKit (Safari).
- **Parallel Execution**: Native parallel test execution for fast build and pipeline runs.
- **Auto-Waiting**: Automatic waiting for UI elements before performing actions, reducing test flakiness.
- **Page Object Model (POM)**: Modular project structure separating UI element locators and page actions from test scripts.
- **Built-in Artifacts**: Automatic capturing of screenshots, video recordings, and trace logs on test failure.
- **Rich HTML Reporting**: Built-in Playwright HTML reporter with interactive debugging capabilities.

---

## 🛠️ Prerequisites & Setup

### Prerequisites
- **Node.js**: `v16.0.0` or higher
- **npm** or **yarn**

### Installation

1. **Clone the repository:**
   ```bash
   git clone [https://github.com/patelsandeep07/PlaywrightRepo.git](https://github.com/patelsandeep07/PlaywrightRepo.git)
   cd PlaywrightRepo

```

2. **Install Node dependencies:**
```bash
npm install

```


3. **Install Playwright browsers:**
```bash
npx playwright install

```



---

## 📁 Repository Structure

```text
PlaywrightRepo/
├── tests/                  # Test suites and test cases
│   ├── example.spec.js     # Sample test spec
│   └── ...
├── pages/                  # Page Object Model (POM) classes
│   ├── BasePage.js
│   └── ...
├── test-results/           # Test execution artifacts (screenshots, videos, traces)
├── playwright-report/      # Generated HTML report output
├── playwright.config.js    # Playwright global execution configuration
├── package.json            # Project dependencies and script shortcuts
└── README.md               # Project documentation

```

---

## 🧪 Running Tests

### Run All Tests (Headless Mode)

```bash
npx playwright test

```

### Run Tests in Headed Mode

```bash
npx playwright test --headed

```

### Run Tests on a Specific Browser

```bash
# Run on Google Chrome
npx playwright test --project=chromium

# Run on Firefox
npx playwright test --project=firefox

# Run on WebKit (Safari)
npx playwright test --project=webkit

```

### Run a Specific Test File

```bash
npx playwright test tests/example.spec.js

```

---

## 📊 Viewing Test Reports & Debugging

### Interactive HTML Report

After running tests, open the interactive HTML report:

```bash
npx playwright show-report

```

### Interactive UI Mode

Launch Playwright's built-in interactive UI runner for live test debugging and inspection:

```bash
npx playwright test --ui

```

### Inspect Traces

View execution trace logs, network requests, and DOM snapshots for failed tests:

```bash
npx playwright show-trace test-results/<path-to-trace.zip>

```

---

## 🤝 Contributing

1. Fork the repository.
2. Create your feature branch (`git checkout -b feature/NewTestCase`).
3. Commit your changes (`git commit -m 'Add new Playwright test scenario'`).
4. Push to the branch (`git push origin feature/NewTestCase`).
5. Open a Pull Request.


```

```
