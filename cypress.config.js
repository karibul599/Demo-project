const { defineConfig } = require("cypress");

module.exports = defineConfig({
  watchForFileChanges: true,
  video: true,
  defaultCommandTimeout: 10000,
  pageLoadTimeout: 60000,
  e2e: {
    browser: 'firefox',
    projectId: '44jcxm',
    baseUrl: 'http://127.0.0.1:5500/jeson-server/TokenLogin.html',
    viewportWidth: 1280,
    viewportHeight: 720,
    setupNodeEvents(on, config) {
      // Implement node event listeners here
    },
  },
});
