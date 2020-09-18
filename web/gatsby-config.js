// Load variables from `.env` as soon as possible
require('dotenv').config({
  path: `.env.${process.env.NODE_ENV || 'development'}`,
});

const clientConfig = require('./client-config');

const isProd = process.env.NODE_ENV === 'production';

module.exports = {
  plugins: [
    'gatsby-plugin-postcss',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-theme-ui',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'fonts',
        path: `${__dirname}/src/fonts/`,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'pages',
        path: `${__dirname}/src/pages/`,
      },
    },
    `gatsby-plugin-mdx`,
    {
      resolve: 'gatsby-source-sanity',
      options: {
        ...clientConfig.sanity,
        token: process.env.SANITY_READ_TOKEN,
        watchMode: !isProd,
        overlayDrafts: !isProd,
      },
    },
    // {
    //   resolve: 'gatsby-plugin-typography',
    //   options: {
    //     pathToConfigModule: `src/utils/typography.js`,
    //     omitGoogleFont: true,
    //   },
    // },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Artem Artemov Portflio`,
        short_name: `Artem Artemov Portfolio`,
        start_url: `/`,
        background_color: `#FFFFFF`,
        theme_color: `#0e0fed`,
        display: `standalone`,
        icon: `src/images/favicon.png`,
      },
    },
    'gatsby-plugin-offline',
  ],
};
