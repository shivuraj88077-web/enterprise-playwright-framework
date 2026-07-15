import { defineConfig, devices } from '@playwright/test';
import dotenv from 'dotenv';
import path from 'path';

// Load Environment File
dotenv.config({
  path: path.resolve(__dirname, 'config', 'qa.env'),
});

export default defineConfig({

  // Test Folder
  testDir: './tests',

  // Run tests in parallel
  fullyParallel: true,

  // Workers
  workers: process.env.CI ? 2 : 4,

  // Retry failed tests
  retries: process.env.CI ? 2 : 1,

  // Stop if test.only exists in CI
  forbidOnly: !!process.env.CI,

  // Reporter
  reporter: [
    [
      'html',
      {
        outputFolder: 'reports/html',
        open: 'never',
      },
    ],

    [
      'junit',
      {
        outputFile: 'reports/junit/results.xml',
      },
    ],
  ],

  // Global Settings
  use: {

    baseURL: process.env.BASE_URL,

    headless: true,

    screenshot: 'only-on-failure',

    video: 'retain-on-failure',

    trace: 'retain-on-failure',

    viewport: {
      width: 1920,
      height: 1080,
    },

    actionTimeout: 10000,

    navigationTimeout: 30000,

    ignoreHTTPSErrors: true,

  },

  // Browsers
  projects: [

    {
      name: 'Chromium',
      use: {
        ...devices['Desktop Chrome'],
      },
    },

    {
      name: 'Firefox',
      use: {
        ...devices['Desktop Firefox'],
      },
    },

    {
      name: 'WebKit',
      use: {
        ...devices['Desktop Safari'],
      },
    },

  ],

});