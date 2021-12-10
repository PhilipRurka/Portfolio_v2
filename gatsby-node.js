const path = require(`path`);
const helper = require('./gatsby-helper.js');

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;

  const queryDataPages = await helper.getQueryData(graphql);

  console.log(' --- --- ---')
  console.log(`  Pages Ceated`)

  for (let i = 0; i < queryDataPages.length; i++) {
    const {
      slug,
      contentType
    } = queryDataPages[i];

    const componentCap = contentType.replace('page', '');
    const componentLow = componentCap.toLowerCase();

    console.log(`    - ${slug}`)

    createPage({
      path: slug,
      component: path.resolve(`src/components/pages/${componentLow}/${componentCap}.container.tsx`),
      // context
    });
  };

  console.log(' --- --- ---')
  console.log(`  ${queryDataPages.length} Pages Created`);
  console.log(' --- --- ---')
};