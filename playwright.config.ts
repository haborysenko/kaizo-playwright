import { defineConfig, devices } from "@playwright/test";

/**
 * Playwright configuration.
 */
export default defineConfig({
  testDir: "./tests", // Specifies the directory where your tests are located

  // Run tests in parallel for faster execution
  fullyParallel: false,

  // Reporter to display the test results, html is useful for viewing reports
  reporter: "html",

  // Shared settings for all the projects below (like base URL, trace, etc.)
  use: {
    trace: "on-first-retry", // Enable tracing to debug failed tests
  },

  // Configure projects for different browsers
  projects: [
    {
      name: "chromium", // Running tests on Chromium browser
      use: { ...devices["Desktop Chrome"] }, // Use desktop Chrome configuration
    },

    {
      name: "firefox", // Running tests on Firefox browser
      use: { ...devices["Desktop Firefox"] }, // Use desktop Firefox configuration
    },
  ],
});
