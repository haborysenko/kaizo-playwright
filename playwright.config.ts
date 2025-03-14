import { defineConfig, devices } from "@playwright/test";

/**
 * Playwright configuration.
 */
export default defineConfig({
  timeout: 60000, // 60 seconds for each test (default is 30 seconds)

  testDir: "./tests", // Specifies the directory where your tests are located

  // Run tests in parallel for faster execution
  fullyParallel: false,

  // Reporter to display the test results, html is useful for viewing reports
  reporter: "html",

  // Shared settings for all the projects below (like base URL, trace, etc.)
  use: {
    headless: true, // Ensuring headless mode
    trace: "on-first-retry", // Enable tracing to debug failed tests
  },

  // Configure projects for different browsers
  projects: [
    {
      name: "chromium", // Running tests on Chromium browser
      use: { ...devices["Desktop Chrome"] }, // Use desktop Chrome configuration
    },

    // disable temp firefox
    // {
    //   name: "firefox", // Running tests on Firefox browser
    //   use: { ...devices["Desktop Firefox"] }, // Use desktop Firefox configuration
    // },
  ],
});
