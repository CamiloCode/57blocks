const { defineConfig } = require("cypress");

module.exports = defineConfig({
  requestTimeout: 20000,
  defaultCommandTimeout: 20000,
  e2e: {
    baseUrl: 'https://github.com',
    setupNodeEvents(cypressOn, config) {
    },
    video: true,
    screenshotOnRunFailure: true,
    failOnStatusCode: false
  },
});
