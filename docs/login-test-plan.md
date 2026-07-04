# Login Feature Test Plan

## Objective
Validate the Sauce Demo login experience for successful authentication, validation errors, and locked-user behavior.

## Scope
- Login page rendering and form controls
- Successful login with valid credentials
- Failed login with invalid credentials
- Required field validation
- Locked-out user handling
- Redirect behavior after authentication

## Test Environment
- Application URL: https://www.saucedemo.com/
- Confirmed login form fields:
  - Username input
  - Password input
  - Login button
- Confirmed accepted credentials:
  - Username: standard_user
  - Password: secret_sauce

## Test Data
| Scenario | Username | Password | Expected Result |
| --- | --- | --- | --- |
| Valid login | standard_user | secret_sauce | User is redirected to the inventory page |
| Invalid credentials | invalid_user | wrong_password | Error message is shown |
| Locked out user | locked_out_user | secret_sauce | Locked-out error message is shown |
| Empty username | (empty) | secret_sauce | Username required error is shown |
| Empty password | standard_user | (empty) | Password required error is shown |
| Empty both fields | (empty) | (empty) | Username required error is shown |

## Test Cases

### 1. Login Page Loads Correctly
- Open the login page.
- Verify the username input, password input, and login button are visible.
- Verify the login form instructions are displayed.

### 2. Successful Login
- Enter standard_user and secret_sauce.
- Click Login.
- Verify the user is redirected to the inventory page.
- Verify the inventory page is visible.

### 3. Invalid Credentials
- Enter a non-existent username and password.
- Click Login.
- Verify an error message appears.
- Verify the user remains on the login page.

### 4. Locked Out User
- Enter locked_out_user and secret_sauce.
- Click Login.
- Verify the locked-out error message appears.
- Verify the user remains on the login page.

### 5. Required Field Validation
- Leave username empty and submit.
- Verify the username required message appears.
- Leave password empty and submit.
- Verify the password required message appears.
- Leave both fields empty and submit.
- Verify the username required message appears.

### 6. UI/Accessibility Basics
- Confirm the login button is enabled and clickable.
- Confirm the form fields are clearly labeled.
- Confirm error messages are visible and readable.

## Exit Criteria
- All positive and negative login scenarios pass.
- No unexpected redirect or broken form behavior occurs.
- Error messages are displayed correctly for each invalid case.
