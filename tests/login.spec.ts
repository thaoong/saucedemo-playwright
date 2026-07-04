// @ts-check
import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';

test.describe('SauceDemo login', () => {
  test('renders the login form correctly', async ({ page }) => {
    const loginPage = new LoginPage(page);

    await loginPage.goto();
    await expect(loginPage.logo).toBeVisible();
    await expect(loginPage.usernameInput).toBeVisible();
    await expect(loginPage.passwordInput).toBeVisible();
    await expect(loginPage.loginButton).toBeVisible();
    await expect(loginPage.credentialsHint).toBeVisible();
    await expect(loginPage.passwordHint).toBeVisible();
    await expect(loginPage.loginButton).toBeEnabled();
  });

  test('logs in a standard user successfully', async ({ page }) => {
    const loginPage = new LoginPage(page);

    await loginPage.goto();
    await loginPage.login('standard_user', 'secret_sauce');

    await expect(page).toHaveURL(/\/inventory\.html$/);
  });

  test('shows an error for invalid credentials', async ({ page }) => {
    const loginPage = new LoginPage(page);

    await loginPage.goto();
    await loginPage.login('invalid_user', 'wrong_password');

    await expect(loginPage.errorMessage).toBeVisible();
    await expect(loginPage.errorMessage).toContainText(/Username and password do not match any user in this service/i);
    await expect(loginPage.usernameInput).toBeVisible();
  });

  test('shows an error for a locked out user', async ({ page }) => {
    const loginPage = new LoginPage(page);

    await loginPage.goto();
    await loginPage.login('locked_out_user', 'secret_sauce');

    await expect(loginPage.errorMessage).toBeVisible();
    await expect(loginPage.errorMessage).toContainText(/locked out/i);
    await expect(loginPage.usernameInput).toBeVisible();
  });

  test('validates empty username and password fields', async ({ page }) => {
    const loginPage = new LoginPage(page);

    await loginPage.goto();

    await loginPage.submitLogin();
    await expect(loginPage.errorMessage).toContainText(/username is required/i);

    await loginPage.clearFields();
    await loginPage.enterUsername('standard_user');
    await loginPage.submitLogin();
    await expect(loginPage.errorMessage).toContainText(/password is required/i);
  });
});

