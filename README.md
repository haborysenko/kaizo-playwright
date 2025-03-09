# Kaizo UI Playwright

## Table of Contents

- [Project Overview](#project-overview)
- [Project Local Setup](#project-setup)
  - [1. Clone the Repository](#1-clone-the-reposiory)
  - [2. Install Dependencies](#2-install-dependencies)
  - [3. Set Up Environment Variables](#3-set-up-environment-variables)
- [Running the Tests](#running-the-tests)
  - [1. Run All Tests](#1-run-all-tests)
- [Test Structure](#test-structure)
- [Github CI-CD](#github-ci-cd)

## Project Overview

This project contains end-to-end tests for Kaizo application, written using Playwright.
These tests validate interactions with Kaizo’s web application, such as creating and deleteing teams, interacting with iframes, and performing other UI-based actions.

## Project Local Setup

### 1. Clone the Repository

Clone the repository to your local machine and navigate to the project directory:

```bash
git clone https://github.com/haborysenko/kaizo-playwright.git
cd kaizo-playwright
```

### 2. Install Dependencies

Make sure that all required dependencies are installed by running next command.

```bash
npm install
```

### 3. Set Up Environment Variables

You need to set up environment variables to authenticate.

1. Create a `.env` file in the root directory of your project (if it doesn't already exist):

```bash
touch .env
```

4. Add the following content to the `.env` file:

```bash
BASE_URL=<your_value>
USERNAME=<your_value>
USER_PASSWORD=<your_value>
```

## Running the Tests

### 1. Run All Tests

To execute the entire test suite, run the following command:

```bash
npx playwright test
```

This will:

- Run all test cases located in the `tests/` directory.
- Validate different use cases and workflows in Kaizo.
- Ensure that the web application functions correctly according to your scenarios.

## Test Structure

The tests are structured to ensure reusability and maintainability:

- **`support/commands.ts`**: Contains reusable helper functions (e.g., login) and custom commands.
- **`tests/`**: Contains all the Playwright tests that validate Kaizo’s login, team creation, iframe interactions, etc.
- **`playwright.config.ts`**: Configuration file for Playwright, which specifies test directories, test runners, and other configurations.

## Github CI-CD

This project includes a GitHub Actions CI/CD pipeline.
The workflow runs automatically for every push or pull request to the `main` branch.
In addition, the CI/CD pipeline can be manually triggered from the GitHub Actions tab in the repository.
