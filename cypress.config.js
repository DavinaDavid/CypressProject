const cucumber = require('cypress-cucumber-preprocessor').default 
const { defineConfig } = require("cypress");

module.exports = defineConfig({ 
  e2e: { setupNodeEvents(on, config) {
     on('file:preprocessor', cucumber()) 
    }, 
    
    specPattern: "cypress/e2e/Features/*.feature",
    "defaultCommandTimeout": 50000, // Set the timeout in milliseconds (e.g., 10 seconds)
    "pageLoadTimeout": 30000, // Set the timeout for page loads, if needed

      "reporter": "mochawesome",
      "reporterOptions": {
         "reportDir": "cypress/reports",
         "overwrite": true,
         "html": true,
         "json": true
      }
   },
   
   });