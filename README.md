# Playwright Automation - Sauce Demo

[![Playwright](https://img.shields.io/badge/Playwright-v1.53.0-blueviolet)](https://playwright.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0+-blue)](https://www.typescriptlang.org/)
[![Node](https://img.shields.io/badge/Node.js-16+-green)](https://nodejs.org/)

End-to-end browser testing for the [Sauce Demo](https://www.saucedemo.com/) application using Playwright and TypeScript. This project demonstrates modern test automation best practices with page object models, comprehensive test organization, and maintainable code structure.

## Quick Start

```bash
# Install dependencies
npm install && npx playwright install

# Run all tests
npx playwright test

# View test report
npx playwright show-report
```

## Overview

This repository contains automated tests for the Sauce Demo e-commerce application, focusing on login flows, user interactions, and critical business scenarios. Tests are written in TypeScript with a page object model pattern for maintainability and reusability.

## Prerequisites

- **Node.js** (v16 or later)
- **npm** (comes with Node.js)
- **Git** (for version control)

## Installation

1. Clone or navigate to the project directory:
   ```bash
   cd PlaywrightAutomation
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Install Playwright browsers:
   ```bash
   npx playwright install
   ```

## Running Tests

### Run all tests
```bash
npx playwright test
```

### Run a specific test file
```bash
npx playwright test tests/login.spec.ts
```

### Run tests with a specific browser
```bash
npx playwright test --project=chromium
npx playwright test --project=firefox
npx playwright test --project=webkit
```

### Run tests in headed mode (see browser window)
```bash
npx playwright test --headed
```

### Run tests with verbose output
```bash
npx playwright test --verbose
```

### View the HTML test report
```bash
npx playwright show-report
```

## Project Structure

```
PlaywrightAutomation/
├── tests/                    # Test spec files (TypeScript)
│   ├── example.spec.ts       # Sample test suite
│   └── login.spec.ts         # Login feature tests
├── pages/                    # Page object models
│   └── LoginPage.ts          # Login page object
├── docs/                     # Documentation
│   └── login-test-plan.md    # Test plan and scenarios
├── data/                     # Test data (optional)
├── playwright.config.ts      # Playwright configuration
├── package.json              # Dependencies
├── tsconfig.json             # TypeScript configuration
├── AGENTS.md                 # AI agent instructions
└── README.md                 # This file
```

## Test Data

### Valid Users
| Username | Password | Description |
|----------|----------|-------------|
| `standard_user` | `secret_sauce` | Standard user with full access |
| `locked_out_user` | `secret_sauce` | Locked out after login attempt |
| `problem_user` | `secret_sauce` | User with visual issues |
| `performance_glitch_user` | `secret_sauce` | User experiencing performance issues |
| `error_user` | `secret_sauce` | User with random errors |
| `visual_user` | `secret_sauce` | User with visual regression issues |

## Writing Tests

### Test Structure
Tests use Playwright's `test` function and are organized with `test.describe()` blocks:

```typescript
import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';

test.describe('Login feature', () => {
  test('successfully logs in with valid credentials', async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('standard_user', 'secret_sauce');
    await expect(page).toHaveURL(/\/inventory\.html$/);
  });
});
```

### Page Objects

The LoginPage pattern demonstrates reusable page objects:

```typescript
export class LoginPage {
  constructor(page: Page) {
    this.usernameInput = page.locator('[data-test="username"]');
    this.passwordInput = page.locator('[data-test="password"]');
    this.loginButton = page.locator('[data-test="login-button"]');
  }

  async goto() {
    await this.page.goto('/');
  }

  async login(username: string, password: string) {
    await this.enterUsername(username);
    await this.enterPassword(password);
    await this.submitLogin();
  }
}
```

## Browser Configuration

Tests are configured to run in three browsers with the following defaults:
- **Headed mode** enabled (see the browser window)
- **Maximized window** size
- **Base URL**: https://www.saucedemo.com

See `playwright.config.ts` for detailed configuration options.

## Common Issues

### Playwright browsers not installed
If you encounter "Browser not found" errors, run:
```bash
npx playwright install
```

### Tests timing out
Increase the timeout in `playwright.config.ts` or in individual tests:
```typescript
test('slow test', async ({ page }) => {
  // test code
}, { timeout: 60000 }); // 60 second timeout
```

## Documentation

- [Login Test Plan](docs/login-test-plan.md) - Detailed test scenarios and coverage
- [AGENTS.md](AGENTS.md) - AI agent instructions for code generation
- [.github/copilot-instructions.md](.github/copilot-instructions.md) - Repository conventions

## Contributing

When adding new tests:
1. Create corresponding page objects in `pages/` for reusable locators and actions
2. Group related tests with `test.describe()`
3. Use descriptive test names that explain what is being tested
4. Prefer data-test attributes for locators
5. Add new test scenarios to `docs/login-test-plan.md`

## Next Steps

- Add page objects for inventory, cart, and checkout flows
- Expand test coverage with edge cases and error scenarios
- Integrate with CI/CD pipeline
- Add performance testing scenarios

## Resources

- [Playwright Documentation](https://playwright.dev/)
- [Sauce Demo](https://www.saucedemo.com/)
- [TypeScript Documentation](https://www.typescriptlang.org/)
