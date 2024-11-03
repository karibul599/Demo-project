const { defineConfig } = require("cypress");

module.exports = defineConfig({
  "watchForFileChanges": true,

  video: true,
  "video": true,  
  "defaultCommandTimeout": 10000,
  "pageLoadTimeout": 60000,
  e2e: {
    projectId:'44jcxm',
    baseUrl: 'http://localhost:5173',
    viewportWidth: 1280,
    viewportHeight: 720,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});


