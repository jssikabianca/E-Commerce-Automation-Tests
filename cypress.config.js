const { defineConfig } = require("cypress");
const { addCucumberPreprocessorPlugin } = require("@badeball/cypress-cucumber-preprocessor");
const { createEsbuildPlugin } = require ("@badeball/cypress-cucumber-preprocessor/esbuild");
const  createBundler = require ("@bahmutov/cypress-esbuild-preprocessor");

module.exports = defineConfig({
  e2e: {
    viewportWidth: 1040,
    viewportHeight: 720,
    specPattern: "**/*.feature",
    setupNodeEvents(on, config) {
      addCucumberPreprocessorPlugin(on, config);

      on(
        "file:preprocessor",
        createBundler({
          plugins: [createEsbuildPlugin(config)],
        })
      );

      return config;
    },
    baseUrl: 'https://advantageonlineshopping.com/#/',
  },
});
