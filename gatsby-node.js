/* eslint-disable @typescript-eslint/no-var-requires */
const express = require('express');

// Serve files from `static` in development
// Workaround for https://github.com/gatsbyjs/gatsby/issues/13072
exports.onCreateDevServer = ({ app }) => {
  app.use(express.static('static'));
};
