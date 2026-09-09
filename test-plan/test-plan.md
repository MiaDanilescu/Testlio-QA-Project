# Test Plan

## Testlio-Inspired Website QA Portfolio Project

### 1. Objective

Validate the key functionality, usability, and reliability of the public Testlio website and demonstrate a practical QA approach using both manual and automated testing.

> This is an independent portfolio project and is not an official Testlio project.

### 2. Scope

**In Scope:**
- Homepage and navigation
- Main links and CTAs
- Contact and Careers pages
- Responsive UI
- Cross-browser testing
- Basic accessibility checks
- Exploratory testing
- Playwright automation

**Out of Scope:**
- Private/login functionality
- Internal Testlio systems
- Security and performance testing
- Production payment transactions

### 3. Testing Approach

Testing will focus on the highest-risk and most important user journeys.

- Functional testing
- Smoke testing
- Regression testing
- Exploratory testing
- Responsive testing
- Cross-browser testing
- Basic accessibility testing
- UI automation

### 4. Automation

**Tools:**
- Playwright
- TypeScript
- GitHub Actions

Automation will cover stable, high-priority regression scenarios using the Page Object Model and reusable test components.

### 5. Browsers

- Chromium
- Firefox
- WebKit

Responsive checks will include desktop, tablet, and mobile viewports.

### 6. Defect Reporting

Confirmed issues will include:

- Steps to reproduce
- Expected result
- Actual result
- Severity/Priority
- Browser/device
- Screenshot or trace when applicable

### 7. Exit Criteria

Testing is complete when:

- Critical user journeys are validated.
- High-priority tests are executed.
- Automation tests pass or failures are investigated.
- Confirmed defects are documented.
- Major risks are identified.

### 8. Deliverables

- Test Cases
- Exploratory Testing
- Playwright Automation
- Bug Reports
- Test Results
- GitHub Actions CI
- README