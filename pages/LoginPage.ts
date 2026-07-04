import { type Locator, type Page } from '@playwright/test';

export class LoginPage {
  readonly page: Page;
  readonly logo: Locator;
  readonly usernameInput: Locator;
  readonly passwordInput: Locator;
  readonly loginButton: Locator;
  readonly errorMessage: Locator;
  readonly credentialsHint: Locator;
  readonly passwordHint: Locator;

  constructor(page: Page) {
    this.page = page;
    this.logo = page.locator('.login_logo');
    this.usernameInput = page.locator('[data-test="username"], #user-name');
    this.passwordInput = page.locator('[data-test="password"], #password');
    this.loginButton = page.locator('[data-test="login-button"], #login-button');
    this.errorMessage = page.locator('[data-test="error"]');
    this.credentialsHint = page.locator('.login_credentials');
    this.passwordHint = page.locator('.login_password');
  }

  async goto() {
    await this.page.goto('/');
    await this.waitForPageToLoad();
  }

  async waitForPageToLoad() {
    await this.logo.waitFor({ state: 'visible' });
    await this.usernameInput.waitFor({ state: 'visible' });
    await this.passwordInput.waitFor({ state: 'visible' });
    await this.loginButton.waitFor({ state: 'visible' });
  }

  async enterUsername(username: string) {
    await this.usernameInput.fill(username);
  }

  async enterPassword(password: string) {
    await this.passwordInput.fill(password);
  }

  async submitLogin() {
    await this.loginButton.click();
  }

  async login(username: string, password: string) {
    await this.enterUsername(username);
    await this.enterPassword(password);
    await this.submitLogin();
  }

  async clearFields() {
    await this.usernameInput.clear();
    await this.passwordInput.clear();
  }

  async isLoginButtonEnabled() {
    return this.loginButton.isEnabled();
  }

  async isErrorVisible() {
    return this.errorMessage.isVisible();
  }

  async getErrorMessage() {
    return this.errorMessage.textContent();
  }

  async getCredentialsHint() {
    return this.credentialsHint.textContent();
  }

  async getPasswordHint() {
    return this.passwordHint.textContent();
  }
}
