# Mobile Automation Test Suite

## Summary

Automated test suite for Android-NativeDemoApp using WebdriverIO and Appium.

## Requirements

- Node.js (v20+)
- Appium
- BrowserStack Account

## Steps to Install

1. Clone the repo: `git clone <url>`
2. Install dependencies: `npm install`

## Steps to Launch

1. Set your `BROWSERSTACK_USERNAME` and `BROWSERSTACK_ACCESS_KEY` in your `.env` file.
2. Run tests: `npx wdio run wdio.conf.js`

## Steps to Generate Reports

1. Run the test suite.
2. Use Allure reporter: `npx allure generate ./allure-results && npx allure open`
