/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */
/* eslint-disable @typescript-eslint/no-var-requires */
const fs = require('fs');
const path = require('path');
const glob = require('glob');

[
  `.env.${process.env.NODE_ENV || 'development'}.local`,
  `.env.${process.env.NODE_ENV || 'development'}`,
  '.env'
].forEach(env => fs.existsSync(env) && require('dotenv').config({ path: env }));

module.exports = {
  siteMetadata: {
    title: 'SVL Simulator',
    description: 'Simulation software to accelerate safe autonomous vehicle development',
    author: 'LGEUS ARL',
    siteUrl: 'https://www.svlsimulator.com'
  },
  plugins: [
    'gatsby-plugin-root-import',
    {
      resolve: 'gatsby-plugin-material-ui',
      options: {
        stylesProvider: {
          injectFirst: true
        }
      }
    },
    'gatsby-plugin-styled-components',
    {
      resolve: 'gatsby-plugin-sitemap',
      options: {
        serialize: ({ site = {}, allSitePage = {} }) => {
          const allPages = allSitePage.nodes || (allSitePage.edges || []).map(edge => edge.node);
          const allPagesWithStatic = (allPages || [])
            .map(p => p.path)
            .concat(
              glob
                .sync('**/*.html', {
                  nodir: true,
                  cwd: path.join(__dirname, 'static')
                })
                .map(p => '/' + p.replace(/\/index.html$/, '/'))
                .filter(p => !p.endsWith('/404.html'))
                .sort()
            );

          return allPagesWithStatic.map(pagePath => ({
            url: ((site.siteMetadata && site.siteMetadata.siteUrl) || '') + pagePath,
            changefreq: 'daily',
            priority: 0.7
          }));
        }
      }
    },
    'gatsby-plugin-robots-txt',
    'gatsby-plugin-client-side-redirect',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    // Adds automatic typescript type generation for graphql queries
    // https://www.gatsbyjs.com/plugins/gatsby-plugin-graphql-codegen/
    {
      resolve: 'gatsby-plugin-graphql-codegen',
      options: {
        // documentPaths: ['./src/**/*.{ts,tsx}', './node_modules/gatsby-*/**/*.js']
        // documentPaths: ['./src/pages/news/index.tsx']
        documentPaths: ['./src/**/*.{ts,tsx}']
      }
    },
    {
      resolve: 'gatsby-plugin-webfonts',
      options: {
        fonts: {
          google: [
            {
              family: 'Open Sans',
              variants: ['400', '600', '700']
            }
          ]
        }
      }
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'SVL Simulator',
        short_name: 'SVL Simulator',
        start_url: '/',
        background_color: '#f7f0eb',
        theme_color: '#a2466c',
        display: 'standalone',
        icon: 'src/images/icon.png'
      }
    },
    // 'gatsby-plugin-offline',
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-plugin-react-i18next',
      options: {
        path: `${__dirname}/locales`,
        languages: fs.readdirSync(`${__dirname}/locales`),
        defaultLanguage: 'en',
        siteUrl:
          process.env.URL ||
          (fs.existsSync(`${__dirname}/static/CNAME`) &&
            `https://${fs.readFileSync(`${__dirname}/static/CNAME`, { encoding: 'utf8' }).trim()}`) ||
          'localhost:8000',
        i18nextOptions: {
          lowerCaseLng: true,
          interpolation: {
            escapeValue: false // not needed for react as it escapes by default
          },
          returnObjects: true
        }
      }
    },
    {
      resolve: 'gatsby-plugin-gdpr-cookies',
      options: {
        googleAnalytics: {
          trackingId: process.env.GA_TRACKING_ID
        },
        environments: ['production', 'development']
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
            extends: [`${__dirname}/.eslintrc.js`]
          },
          useEslintrc: false,
          emitWarning: true,
          failOnError: true
        }
      }
    },
    {
      resolve: 'gatsby-remark-images',
      options: {
        linkImagesToOriginal: false,
        backgroundColor: 'none'
      }
    },
    'gatsby-remark-autolink-headers',
    {
      resolve: 'gatsby-plugin-mdx',
      options: {
        defaultLayouts: {
          // posts: require.resolve("./src/components/posts-layout.js"),
          default: require.resolve('./src/components/md/Layout.tsx')
        },
        extensions: ['.mdx', '.md'],
        gatsbyRemarkPlugins: [
          {
            resolve: 'gatsby-remark-images',
            options: {
              linkImagesToOriginal: false,
              backgroundColor: 'none'
            }
          },
          'gatsby-remark-autolink-headers'
        ]
      }
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'src',
        path: `${__dirname}/src/`
      }
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/images`
      }
    }
  ]
};
