/* eslint-disable @typescript-eslint/no-var-requires */
const React = require('react');

exports.onPreRenderHTML = ({ pathname, getHeadComponents, replaceHeadComponents }) => {
  const headComponents = getHeadComponents();
  // Remove any lingering service workers
  headComponents.unshift(
    <script dangerouslySetInnerHTML={{
      __html: `
        if (typeof navigator !== 'undefined' && navigator.serviceWorker && navigator.serviceWorker.getRegistrations) {
          navigator.serviceWorker.getRegistrations().then(function(registrations) {
            for(let registration of registrations) {
              registration.unregister();
            }
          });
        }
      `
    }} />
  );
  if (pathname.endsWith('/404.html') && pathname !== '/docs/404.html') {
    // Add redirect to docs 404 page when URL originated from /docs/
    headComponents.unshift(
      <script dangerouslySetInnerHTML={{
        __html: `
          if (typeof window !== 'undefined' && window.location.pathname.startsWith('/docs/')) {
            window.location.pathname = '/docs/404.html';
          }
        `
      }} />
    );
  }
  replaceHeadComponents(headComponents);
}
