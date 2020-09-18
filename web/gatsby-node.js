const { resolve } = require('path');

// const { isFuture } = require('date-fns');
/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// async function createProjectPages(graphql, actions, reporter) {
//   const { createPage, createPageDependency } = actions;
//   const result = await graphql(`
//     {
//       allSanityProject(filter: { slug: { current: { ne: null } }, publishedAt: { ne: null } }) {
//         edges {
//           node {
//             id
//             publishedAt
//             slug {
//               current
//             }
//           }
//         }
//       }
//     }
//   `);

//   if (result.errors) throw result.errors;

//   const projectEdges = (result.data.allSanityProject || {}).edges || [];

//   projectEdges
//     .filter((edge) => !isFuture(edge.node.publishedAt))
//     .forEach((edge) => {
//       const { id } = edge.node;
//       const slug = edge.node.slug.current;
//       const path = `/project/${slug}/`;

//       reporter.info(`Creating project page: ${path}`);

//       createPage({
//         path,
//         component: require.resolve('./src/templates/project.js'),
//         context: { id },
//       });

//       createPageDependency({ path, nodeId: id });
//     });
// }

// exports.createPages = async ({ graphql, actions, reporter }) => {
//   await createProjectPages(graphql, actions, reporter);
// };

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
