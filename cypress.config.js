const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {

    'baseUrl': 'https://www.moneycorp.com/en-gb/', 
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
