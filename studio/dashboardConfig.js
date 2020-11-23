export default {
  widgets: [
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
                  buildHookId: '5fbb3eb74e7332111a5c3c04',
                  title: 'Sanity Studio',
                  name: 'landing-page-sample-studio',
                  apiId: '292815e7-e764-4eca-80f0-64419defe9fe'
                },
                {
                  buildHookId: '5fbb3eb79e79d30fe8390884',
                  title: 'Blog Website',
                  name: 'landing-page-sample',
                  apiId: '8741c0d9-9f82-4efb-9678-00c990c5224c'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/milkshakegum/Landing-Page-sample',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://landing-page-sample.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
