/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

const fs = require('fs');
const path = require('path');
const tPath = path.join(__dirname, 'src', 'translations');
const locales = fs
  .readdirSync(tPath)
  .filter(e => fs.statSync(path.join(tPath, e)).isFile())
  .map(f => path.basename(f, '.json'));
const resources = locales.reduce((acc, loc) => ({
  ...acc,
  [loc]: {
    translation: JSON.parse(fs.readFileSync(path.join(tPath, loc + '.json'), {encoding: 'utf8'}))
  }
}), {});


module.exports = {
  siteMetadata: {
    title: 'LGSVL Simulator',
    description: 'Simulation software to accelerate safe autonomous vehicle development',
    author: 'LGSVL',
    siteUrl: process.env.URL || 'localhost:8000',
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
    {
      resolve: '@3nvi/gatsby-theme-intl',
      options: {
        supportedLanguages: ['en'],
        i18nextConfig: {
          resources
        }
      }
    }
  ]
};
