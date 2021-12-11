const contentfulManagement = require("contentful-management");
require('dotenv').config()

// env.config({ path: '.env' })

const {
  REACT_APP_MANAGEMENT_ACCESS_TOKEN,
  REACT_APP_SPACE_ID,
  REACT_APP_ENVIRONMENT
} = process.env;

module.exports = () => {
  const contentfulClient = contentfulManagement.createClient({
    accessToken: REACT_APP_MANAGEMENT_ACCESS_TOKEN,
  });

  return contentfulClient
    .getSpace(REACT_APP_SPACE_ID)
    .then(space => space.getEnvironment(REACT_APP_ENVIRONMENT));
};