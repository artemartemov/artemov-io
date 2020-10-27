const { resolve } = require('path');

async function createPages(pathPrefix = '/', graphql, actions, reporter) {
  const { createPage } = actions;
  const result = await graphql(`
    {
      allSanityRoute(filter: { slug: { current: { ne: null } }, page: { id: { ne: null } } }) {
        edges {
          node {
            id
            slug {
              current
            }
          }
        }
      }
    }
  `);

  if (result.errors) throw result.errors;

  const routeEdges = (result.data.allSanityRoute || {}).edges || [];
  routeEdges.forEach((edge) => {
    const { id, slug = {} } = edge.node;
    const path = [pathPrefix, slug.current, '/'].join('');
    reporter.info(`Creating Page: ${path}`);
    createPage({
      path,
      component: require.resolve('./src/templates/page.js'),
      context: { id },
    });
  });
}

exports.createPages = async ({ graphql, actions, reporter }) => {
  await createPages('/', graphql, actions, reporter);
};

exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    resolve: {
      modules: [resolve(__dirname, 'src'), 'node_modules'],
      alias: {
        components: resolve(__dirname, 'src/components'),
        // utils: resolve(__dirname, 'src/utils'),
      },
    },
  });
};
