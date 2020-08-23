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
                  buildHookId: '5f421311560aaa49fae6446e',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-urkp2yge',
                  apiId: '4200dc10-8724-4dcd-8e0a-9c29d1ac1507'
                },
                {
                  buildHookId: '5f421311c86c10338edfaf04',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-dapzi8rp',
                  apiId: '071a3e80-721d-47d6-960f-1b1a904a0580'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/noChamp/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-dapzi8rp.netlify.app', category: 'apps'}
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
