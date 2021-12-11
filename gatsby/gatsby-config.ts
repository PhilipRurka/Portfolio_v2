import dotenv from 'dotenv';
dotenv.config()

const {
  REACT_APP_ACCESS_TOKEN,
  REACT_APP_SPACE_ID
} = process.env

export default {
  siteMetadata: {
    siteUrl: "https://www.philiprurka.com",
    title: "Philip Rurka's Portfolio v2",
  },
  plugins: [
    {
      resolve: "gatsby-source-contentful",
      options: {
        accessToken: REACT_APP_ACCESS_TOKEN,
        spaceId: REACT_APP_SPACE_ID,
      },
    },
    "gatsby-plugin-styled-components",
    "gatsby-plugin-sitemap",
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    `gatsby-plugin-typescript`
  ],
};