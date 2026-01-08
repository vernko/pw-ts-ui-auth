# # Playwright TypeScript - UI & Authentication Testing

## Purpose

This project demonstrates UI test automation skills using TypeScript and Playwright. It includes tests for the Playwright documentation website and an authentication flow using an Express JWT application.

## Prerequisites

Before you begin, ensure you have:

- Node.js (v18 or higher recommended)
- npm or yarn package manager
- Git
- Express JWT app on your local machine (in order to run the authentication tests)

## Tech Stack

**Language:** TypeScript

**Framework:** Playwright

**Design Pattern:** Page Object Model (POM)

## Getting Started

### Installation

1. Clone the repository:
```bash
   git clone <your-repo-url>
```

2. Navigate to the project directory:
```bash
   cd pw-ts-ui-auth
```

3. Install dependencies:
```bash
   npm install
```

4. Install Playwright browsers:
```bash
   npx playwright install
```

### Authentication Tests Setup

The authentication tests require a local Express JWT app to be running.

**Repository:** [SmailBestybay/express-jwt-app](https://github.com/SmailBestybay/express-jwt-app)

1. Clone the auth app (in a separate directory):
```bash
   git clone https://github.com/SmailBestybay/express-jwt-app.git
   cd express-jwt-app
   npm install
```

2. Start the auth app:
```bash
   npm start
```
   The app will run on `http://localhost:3000`

3. Keep this running in a separate terminal while running auth tests locally

**Note:** The auth app starts automatically in CI/CD, so this is only needed for local development.

## Project Structure
```
pw-ts-ui-auth/
├── POM/
│   ├── HomePage.ts         # Playwright docs homepage
│   └── AuthPage.ts         # Authentication page
├── tests/
│   ├── helpers/
│   │   └── utils.ts        # Shared utility functions
│   ├── home.spec.ts        # Playwright documentation tests
│   └── auth.spec.ts        # Authentication flow tests
├── playwright/
│   └── .auth/              # Stored authentication states
├── playwright.config.ts
└── package.json
```

## Test Coverage

### Playwright Documentation Tests (PW-DOC)
- **PW-DOC-01:** Homepage H1 heading verification
- **PW-DOC-02:** Footer copyright validation with regex
- **PW-DOC-03:** Search functionality and navigation
- **PW-DOC-04:** Visual regression - Features section
- **PW-DOC-05:** Visual regression - Footer

### Authentication Tests (PW-AUTH)
- **PW-AUTH-01:** Successful login with storage state save
- **PW-AUTH-02:** Invalid credentials error handling
- **PW-AUTH-03:** Protected page access using saved auth state

## Running Tests

### Run All Tests
```bash
npx playwright test
```

### Run Specific Test Suite
```bash
npx playwright test home.spec.ts      # Docs tests only
npx playwright test auth.spec.ts      # Auth tests only
```

### Run Tests for Specific Browser
```bash
npx playwright test --project=chromium
npx playwright test --project=firefox
npx playwright test --project=webkit
```

### Run in Headed Mode
```bash
npx playwright test --headed
```

### Run in UI Mode
```bash
npx playwright test --ui
```

### Update Visual Snapshots
```bash
npx playwright test --update-snapshots
```

### Run from IDE
1. Open the spec file containing your test
2. Find the test function you want to run
3. Click the play button next to the test

For more command line options, see [Playwright's CLI documentation](https://playwright.dev/docs/test-cli).

## Test Cases

Detailed test cases are documented in the [Test Case Spreadsheet](https://docs.google.com/spreadsheets/d/1KqiKk3v7PmwXzGzwL24nV50RyF8yE1EHNOKmGegBMyA/edit?usp=sharing).

Each test case includes:
- Test ID
- Description
- Preconditions
- Detailed test steps
- Test data
- Expected results

## CI/CD

Tests run automatically on GitHub Actions for:
- Pull requests
- Pushes to main branch

The CI pipeline:
- Runs on macOS to match local development environment
- Automatically starts the Express JWT app for auth tests
- Executes all test suites
- Uploads test reports as artifacts
- Retries flaky tests automatically

## Page Object Model

### What is POM?

The Page Object Model is a design pattern that creates an object repository for web elements. Each page of the application has a corresponding Page Object class.

### Organization

Page Objects are located in `POM/`. Each page gets its own class containing:

- **Locators** - selectors for page elements
- **Actions** - methods for interacting with the page (clicks, inputs, etc.)

### Example
```typescript
export class HomePage {
  readonly page: Page
  readonly mainHomeHeading: Locator

  constructor(page: Page) {
    this.page = page
    this.mainHomeHeading = page.locator('.hero__title')
  }
}
```

## Best Practices

✅ Use descriptive test names that explain what is being tested  
✅ Keep tests independent - each test should run in isolation  
✅ Use proper waits - rely on Playwright's auto-waiting instead of hard timeouts  
✅ Add retries for genuinely flaky tests when needed  
✅ Keep Page Objects focused on a single page  
✅ Use helper functions for repeated logic  

## Troubleshooting

**Authentication tests failing locally?**
- Ensure the Express JWT app is running on `http://localhost:3000`
- Check that `npm start` was successful in the express-jwt-app directory

**Visual tests failing?**
- OS-specific snapshots may differ (darwin vs linux)
- Run `npx playwright test --update-snapshots` to regenerate baselines
- Ensure CI uses same OS as local development (currently macOS)

**Tests timing out?**
- Increase timeout in `playwright.config.ts`
- Check if you're waiting for the right conditions

**Browser issues?**
- Run `npx playwright install --force` to reinstall browsers
- Ensure you're using compatible Node.js version

## Additional Resources

### Playwright Documentation
- [Official Playwright Docs](https://playwright.dev)
- [Test Automation University - Playwright Path](https://testautomationu.applitools.com/learningpaths.html?id=playwright-path)

### Page Object Model
- [BrowserStack POM Guide](https://www.browserstack.com/guide/page-object-model-in-selenium)

## Project Notes

This project was created as part of a technical assessment to demonstrate:
- Playwright test automation proficiency
- TypeScript expertise
- Page Object Model implementation
- Visual regression testing
- Authentication flow testing
- CI/CD integration
- Test documentation and organization