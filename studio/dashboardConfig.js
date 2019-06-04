export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5cf5bd5590df74e0e21dd8bf',
                  title: 'Sanity Studio',
                  name: 'artemov-io-studio',
                  apiId: '47aa1523-b7aa-496b-a14e-0c3861a64fd4'
                },
                {
                  buildHookId: '5cf5bd55e9c7e8efda4f7ba1',
                  title: 'Portfolio Website',
                  name: 'artemov-io',
                  apiId: 'efa010a2-a037-434e-9092-9cea7211c387'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/artemartemov/artemov-io',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://artemov-io.netlify.com', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['project']},
      layout: {width: 'medium'}
    }
  ]
}
