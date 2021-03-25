/* eslint-disable @typescript-eslint/no-var-requires */
const React = require('react');

exports.onPreRenderHTML = ({ pathname, getHeadComponents, replaceHeadComponents }) => {
  if (pathname.endsWith('/404.html') && pathname !== '/docs/404.html') {
    const headComponents = getHeadComponents();
    headComponents.unshift(
      <script dangerouslySetInnerHTML={{
        __html: `
          if (typeof window !== 'undefined' && window.location.pathname.startsWith('/docs/')) {
            window.location.pathname = '/docs/404.html';
          }
        `
      }} />
    );
    replaceHeadComponents(headComponents);
  }
}
