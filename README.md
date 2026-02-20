# QA Automation – SiteGround Task

## Project Overview

This project contains automated end-to-end tests built with Playwright and TypeScript.

The framework follows the Page Object Model (POM) design pattern and clean architecture principles to ensure maintainability, readability, and scalability.

---

## Implemented Test Scenarios

- TC#1 – Add Email Account (Positive Flow)

- TC#2 – Forwarder Validation (Negative Flow – Required Field Error)

Each test is executed across:

- Chromium

- Firefox

- WebKit

---

## Framework Features

- Page Object Model (POM)

- BasePage with shared navigation logic

- Environment-based configuration

- GitHub Actions CI integration

- Cross-browser execution

---

## Environment Configuration

The project uses environment variables for sensitive data (e.g., demo token).

### Local Setup

Create a `.env` file in the root directory:

DEMO_TOKEN=your_demo_token_here

The `.env` file is used for local execution only and is excluded from version control via `.gitignore`.


### CI Setup (GitHub Actions)

In CI, the `DEMO_TOKEN` is provided securely using GitHub Secrets:

secrets.DEMO_TOKEN

This ensures sensitive data is never exposed in the repository.

---

## Project Structure

pages/

  base.page.ts

  dashboard.page.ts

  emailAccounts.page.ts

  forwarders.page.ts

tests/

  emailAccounts.spec.ts

  forwarders.spec.ts

utils/

  testData.ts

playwright.config.ts

---

## Architecture Explanation

### BasePage

Contains shared functionality such as navigation with token.

### Page Objects

Encapsulate locators and user actions.

Expose business-level methods.

### Tests

Contain business logic and assertions only.

No raw locators are used directly inside test files.

### testData

Stores reusable test data such as:

- demo token

- domains

- account name

### playwright.config.ts

Centralized configuration:

- baseURL

- browser setup

- reporters

- retries

- environment loading

---

## Design Principles

The framework clearly separates:

- Locators

- Actions

- Assertions

- Test data

- Configuration

This structure improves:

- Maintainability

- Reusability

- Readability

- Scalability

---

## Prerequisites

- Node.js v22.16.0 (recommended)

- npm

Check Node version:

node -v

---

## Installation

Install dependencies:

npm install

Install Playwright browsers (if needed):

npx playwright install

---

## Running Tests

Run all tests (headless):

npx playwright test

Run in headed mode:

npx playwright test --headed

Run tests multiple times (stability check):

npx playwright test --repeat-each=5

---

## Test Report

After execution:

npx playwright show-report

---

## CI Execution

Tests are automatically executed on:

- Push to main

- Pull requests to main

GitHub Actions workflow:

.github/workflows/playwright.yml

---

## Notes

- `.env` file is ignored by Git.

- Cross-browser validation is enabled by default.

- The framework is designed to be easily extendable for additional test scenarios.
 