
const { defineConfig } = require("cypress");
const preprocessor = require("@badeball/cypress-cucumber-preprocessor");
const browserify = require("@badeball/cypress-cucumber-preprocessor/browserify");

async function setupNodeEvents(on, config) {
  // This is required for the preprocessor to be able to generate JSON reports after each run, and more,
  await preprocessor.addCucumberPreprocessorPlugin(on, config);

  on("file:preprocessor", browserify.default(config));

  // Make sure to return the config object as it might have been modified by the plugin.
  return config;
}
module.exports = defineConfig({

  defaultCommandTimeout: 6000,
  pageLoadTimeout:10000,
  env: {
    url: "https://rahulshettyacademy.com",
  },
  retries: {
    runMode: 1,

  },
  projectId: "9q85s7",
  experimentalStudio: true,
  
  e2e: {
    setupNodeEvents,
    specPattern: "cypress/e2e/",
    baseUrl:"https://the-internet.herokuapp.com/"

  },
  
     "reporter": "mochawesome",
      "reporterOptions": {
       "reportDir": "cypress/results",
       "overwrite": false,
       "html": true,
       "json": true
    }
 }
);

//messages -> json file ->html