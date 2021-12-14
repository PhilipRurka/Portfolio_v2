import dotenv from 'dotenv';
import { HeaderQuery } from '../@types/generated/graphql';
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
    description: `A glimps into one of Philip Rurka's passions`,
    author: "Philip Rurka",
    menuLinks:[
      {
        name:'Home',
        link:'/'
      },
      {
        name: 'Resume',
        link: '/resume'
      }
    ]
  },
  plugins: [
    "gatsby-plugin-styled-components",
    "gatsby-plugin-sitemap",
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    `gatsby-plugin-typescript`,
    'gatsby-plugin-react-helmet',
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
        fileName: `./@types/generated/graphql.d.ts`,
        documentPaths: [
          './src/**/*.{ts,tsx}',
          './node_modules/gatsby*/!(node_modules)/**/*.js'
        ]
      }
    }
  ]
};