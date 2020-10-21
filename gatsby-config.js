/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */
const fs = require('fs');
const path = require('path');

module.exports = {
  siteMetadata: {
    title: 'LGSVL Simulator',
    description: 'Simulation software to accelerate safe autonomous vehicle development',
    author: 'LGSVL'
  },
  plugins: [
    'gatsby-plugin-styled-components',
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'LGSVL Simulator',
        short_name: 'LGSVL Simulator',
        start_url: '/',
        background_color: '#f7f0eb',
        theme_color: '#a2466c',
        display: 'standalone',
        icon: 'src/images/icon.png'
      }
    },
    'gatsby-plugin-offline',
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-plugin-react-i18next',
      options: {
        path: `${__dirname}/locales`,
        languages: fs.readdirSync(`${__dirname}/locales`),
        defaultLanguage: 'en',
        siteUrl: process.env.URL || 'localhost:8000',
        i18nextOptions: {
          lowerCaseLng: true,
          interpolation: {
            escapeValue: false // not needed for react as it escapes by default
          },
          returnObjects: true
        }
      }
    },
    'gatsby-plugin-typescript-checker',
    {
      resolve: 'gatsby-plugin-eslint',
      options: {
        test: /\.(js|mjs|jsx|ts|tsx)$/,
        exclude: /(node_modules|.cache|public)/,
         options: {
          eslintPath: require.resolve('eslint'),
          resolvePluginsRelativeTo: __dirname,
          baseConfig: {
            extends: [path.resolve(__dirname, '.eslintrc.js')]
          },
          useEslintrc: false,
          emitWarning: true,
          failOnError: true
        }
      }
    }
  ]
};
