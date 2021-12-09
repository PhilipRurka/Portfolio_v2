const path = require(`path`);

const templateHash = {
  pageResume: 'Resume',
  pageHome: 'Home'
};

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;
  
  const result = await graphql(`
    query MyQuery {
      allContentfulEntry {
        edges {
          node {
            id
            ... on ContentfulPageResume {
              slug
              title
              tags
              content {
                raw
              }
              sys {
                contentType {
                  sys {
                    id
                  }
                }
              }
            }
            ... on ContentfulPageHome {
              slug
              content {
                raw
              }
              sys {
                contentType {
                  sys {
                    id
                  }
                }
              }
            }
          }
        }
      }
    }
  `);

  const {
    data: { allContentfulEntry: {
      edges: pages
    }}
  } = result;

  console.log(' --- --- ---')
  console.log(`  Pages Ceated`)

  for (let i = 0; i < pages.length; i++) {
    const {
      node: {
        slug,
        sys: { contentType: { sys: {
          id: contentType
        }}},
        ...context
      }
    } = pages[i];

    const componentCap = templateHash[contentType];
    const componentLow = componentCap.toLowerCase();

    console.log(`    - ${slug}`)

    createPage({
      path: slug,
      component: path.resolve(`src/components/pages/${componentLow}/${componentCap}.container.tsx`),
      context
    });
  };

  console.log(' --- --- ---')
  console.log(`  ${pages.length} Pages Created`);
  console.log(' --- --- ---')
};