import dotenv from 'dotenv';
dotenv.config({
  path: '.env'
})

const {
  GATSBY_ACCESS_TOKEN,
  GATSBY_SPACE_ID
} = process.env

export default {
  siteMetadata: {
    siteUrl: "https://www.philiprurka.com",
    title: "Philip Rurka's Portfolio v2",
  },
  plugins: [
    "gatsby-plugin-styled-components",
    "gatsby-plugin-sitemap",
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    `gatsby-plugin-typescript`,
    {
      resolve: "gatsby-source-contentful",
      options: {
        accessToken: GATSBY_ACCESS_TOKEN,
        spaceId: GATSBY_SPACE_ID,
      },
    },
    {
      resolve: `gatsby-plugin-graphql-codegen`,
      options: {
        fileName: `./gatsby/gatsby-graphql.ts`,
        documentPaths: [
          './src/**/*.{ts,tsx}',
          './node_modules/gatsby-*/**/*.js'
        ]
      }
    }
  ]
};