# AI Agent Instructions for PlaywrightAutomation

## Purpose
This repository contains end-to-end Playwright tests for the Sauce Demo application (https://www.saucedemo.com/). AI agents should focus on test authoring, page object patterns, and extending test coverage.

## Key files
- `playwright.config.ts` – test configuration.
- `tests/` – contains `example.spec.ts` and `login.spec.ts`.
- `pages/LoginPage.ts` – page object for login form actions and locators.
- `docs/login-test-plan.md` – test scenarios and coverage plan.
- `package.json` – includes `@playwright/test` v1.53.0 and `@types/node`.

## How to run tests
```bash
npm install
npx playwright install
npx playwright test
npx playwright test tests/login.spec.ts --project=chromium --headed
npx playwright show-report
```

## Conventions
- **Language:** TypeScript throughout (tests and page objects).
- **Test structure:** Use `test.describe()` for grouping, `test()` for individual scenarios.
- **Page objects:** Follow LoginPage pattern—locators as properties, actions as async methods.
- **Locators:** Prefer data-test attributes, fallback to IDs or class names.
- **Assertions:** Use Playwright matchers: `toBeVisible()`, `toContainText()`, `toHaveURL()`.
- **Base URL:** https://www.saucedemo.com (configured in playwright.config.ts).
- **Browser mode:** Headed mode with maximized window (default in config).

## Test data & users
From Sauce Demo login page:
- Valid user: `standard_user` / `secret_sauce`
- Locked user: `locked_out_user` / `secret_sauce`
- Other test users: `problem_user`, `performance_glitch_user`, `error_user`, `visual_user`

## Important notes for agents
- There is existing copilot-instructions.md in `.github/` — refer to it for project context.
- No npm scripts defined; always use `npx playwright` directly.
- The project targets only saucedemo.com; do not assume other applications.
- LoginPage is the established pattern for page objects—extend it for other pages.
- Documentation exists in `docs/login-test-plan.md`; check before creating duplicates.

## Next steps for agents
- Add more page objects for product inventory, cart, and checkout flows.
- Expand test coverage with negative and edge-case scenarios.
- Consider environment variables for credentials (dotenv already available).

