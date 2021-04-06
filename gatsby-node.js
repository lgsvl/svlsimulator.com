/* eslint-disable @typescript-eslint/no-var-requires */
const express = require('express');

// Serve files from `static` in development
// Workaround for https://github.com/gatsbyjs/gatsby/issues/13072
exports.onCreateDevServer = ({ app }) => {
  app.use(express.static('static'));
};

const redirects = {
  '/privacy': 'https://www.lg.com/us/privacy',
  '/blog': '/news',
  '/blog/2': '/news',
  '/2019/03/19/sprint-04-video': '/news/2019-03-19-sprint-04-video',
  '/2019/04/23/april-release': '/news/2019-04-23-april-release',
  '/2019/05/10/api-scenario-examples': '/news/2019-05-10-api-scenario-examples',
  '/2019/07/16/upcoming-2019-07-release': '/news/2019-07-16-upcoming-2019-07-release',
  '/2020/01/21/2019-12-release': '/news/2020-01-21-2019-12-release',

  '/docs/autoware-instructions': '/docs/archive/2020.06/autoware-instructions',
  '/docs/controllable-plugins': '/docs/archive/2020.06/controllable-plugins',
  '/docs/pointcloud-rendering': '/docs/archive/2020.06/pointcloud-rendering',
  '/docs/autoware-json-example': '/docs/archive/2020.06/autoware-json-example',
  '/docs/faq': '/docs/archive/2020.06/faq',
  '/docs/add-new-ego-vehicle': '/docs/archive/2020.06/add-new-ego-vehicle',
  '/docs/create-ros2-ad-stack': '/docs/archive/2020.06/create-ros2-ad-stack',
  '/docs/map-annotation': '/docs/archive/2020.06/map-annotation',
  '/docs/sensor-visualizers': '/docs/archive/2020.06/sensor-visualizers',
  '/docs/apollo5-0-instructions': '/docs/archive/2020.06/apollo5-0-instructions',
  '/docs/apollo-master-instructions': '/docs/archive/2020.06/apollo-master-instructions',
  '/docs/keyboard-shortcuts': '/docs/archive/2020.06/keyboard-shortcuts',
  '/docs/lane-following': '/docs/archive/2020.06/lane-following',
  '/docs/perception-ground-truth': '/docs/archive/2020.06/perception-ground-truth',
  '/docs/cluster-simulation-introduction': '/docs/archive/2020.06/cluster-simulation-introduction',
  '/docs/npc-plugins': '/docs/archive/2020.06/npc-plugins',
  '/docs/build-instructions': '/docs/archive/2020.06/build-instructions',
  '/docs/bridge-connection-ui': '/docs/archive/2020.06/bridge-connection-ui',
  '/docs/simulator-coordinate-system': '/docs/archive/2020.06/simulator-coordinate-system',
  '/docs/cluster-simulation-quickstart': '/docs/archive/2020.06/cluster-simulation-quickstart',
  '/docs/lidar-plugin': '/docs/archive/2020.06/lidar-plugin'
};

exports.createPages = ({ graphql, actions }) => {
  const { createRedirect } = actions;
  Object.keys(redirects).forEach(fromPath => {
    createRedirect({ fromPath, toPath: redirects[fromPath], isPermanent: true });
  });
}
