# Repository AI Instructions

This is a Playwright automation repository for end-to-end testing the Sauce Demo application.

## What this repo is for
- End-to-end browser tests using `@playwright/test`.
- Page object models in TypeScript for maintainable test code.
- Testing the Sauce Demo login flow (https://www.saucedemo.com/).

## Project structure
- `tests/` – Playwright test specs (TypeScript).
- `pages/` – Page object models (LoginPage.ts is the primary example).
- `docs/` – Test plans and documentation (login-test-plan.md).
- `playwright.config.ts` – Test configuration with baseURL set to saucedemo.com.
- `data/` – Test data if needed.

## Important conventions
- Write tests in TypeScript in `tests/`.
- Create reusable page objects in `pages/` for locators and actions.
- Use the LoginPage pattern: locator definitions in constructor, action methods in class.
- Do not assume a local app—all tests target saucedemo.com.
- No npm scripts defined; use direct `npx playwright` commands.

## Test configuration
- Base URL: https://www.saucedemo.com
- Browsers: Chromium, Firefox, WebKit (all run in headed mode with maximized window).
- Trace collection on first retry.

## How to run
- Install dependencies: `npm install`
- Install Playwright browsers: `npx playwright install`
- Run all tests: `npx playwright test`
- Run specific test: `npx playwright test tests/login.spec.ts`
- Run with specific browser: `npx playwright test --project=chromium`
- Run in headed mode (already default): `npx playwright test --headed`
- View HTML report: `npx playwright show-report`

## Key patterns
- **Page objects:** Locators as class properties, actions as async methods.
- **Test organization:** Group related tests with `test.describe()`.
- **Assertions:** Use Playwright's built-in matchers (`toBeVisible`, `toContainText`, `toHaveURL`).
- **Login testing:** Use LoginPage.login() for standard flow, or individual methods for validation tests.

## Dependencies
- `@playwright/test` – testing framework and runner.
- `@types/node` – TypeScript support.
- `dotenv` – environment variable management.

