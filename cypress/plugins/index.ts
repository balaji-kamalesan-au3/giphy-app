// plugins/index.js

// This function is called when a project is opened (e.g., `npm run cy:open` or `npm run cy:run`)
// It is used to configure or extend Cypress behavior.
module.exports = (on, config) => {
  // You can add custom commands here:
  // require('./commands')(on, config);

  // Add other plugins or configurations as needed...

  return config;
};