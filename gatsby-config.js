//const dotenv=require('dotenv');
// if(process.env.NODE_ENV!=='production')
// {
//   dotenv.config();
// }
module.exports = {
  siteMetadata: {
    title: `Gatsby Starter Blog With Contentful`,
    author: {
      name: `Derin Mathew`,
      summary: `who lives and works in India building useful things.`,
    },
    description: `A starter blog demonstrating what Gatsby and Contentful can do.`,
    siteUrl: `https://gatsby-starter-blog-demo.netlify.com/`,
    social: {
      twitter: ``,
    },
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/blog`,
        name: `blog`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/assets`,
        name: `assets`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          `gatsby-remark-prismjs`,
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-smartypants`,
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        //trackingId: `ADD YOUR TRACKING ID HERE`,
      },
    },
    
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },
    {
      resolve:`gatsby-source-contentful`,
      options:{
        spaceId:`kyd8nm5y6g2s`,
        accessToken:`y8NFDTWT1qjHnAzWpYUS1N7aIvknnfLp6M2-2-fsl3Y`
      }
    },
    `@contentful/gatsby-transformer-contentful-richtext`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
