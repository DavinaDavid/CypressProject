const {defineConfig} = require("cypress");
const cucumber = require('cypress-cucumber-preprocessor').default;

module.exports = defineConfig({
    e2e: {
        baseUrl: 'https://lineup-backend-2025-web.ci.lineup.ai',
        specPattern: 'cypress/e2e/**/*.feature', // Update the specPattern to match your feature file location
        defaultCommandTimeout: 35000,
        setupNodeEvents(on, config) {
            on('file:preprocessor', cucumber({
                resolveStepDefinition(definition) {
                    return definition;
                },
                featureName: "___GLOBAL_EXECUTION___",
                nonGlobalStepDefinitions: false,
                stepDefinitions: './cypress/support/stepDefinition/'
            }));
        },
        "reporter": "mochawesome",
        "reporterOptions": {
           "reportDir": "cypress/reports",
           "overwrite": true,
           "html": true,
           "json": true
        }
    }
});

// const cucumber = require('cypress-cucumber-preprocessor').default 
// const { defineConfig } = require("cypress");

// module.exports = defineConfig({ 
//   e2e: { setupNodeEvents(on, config) {
//      on('file:preprocessor', cucumber()) 
//     }, 
    
//     specPattern: "cypress/e2e/Features/*.feature",
//     "defaultCommandTimeout": 50000, // Set the timeout in milliseconds (e.g., 10 seconds)
//     "pageLoadTimeout": 30000, // Set the timeout for page loads, if needed

//       "reporter": "mochawesome",
//       "reporterOptions": {
//          "reportDir": "cypress/reports",
//          "overwrite": true,
//          "html": true,
//          "json": true
//       }
//    },
//    });