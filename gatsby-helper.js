// const pageLists = [
//   'Home',
//   'Resume'
// ] as const;

// module.exports = {
//   getQueryData: async (graphql: any): Promise<any> => {
//     let innerQuery: string = '';

//     for (let i = 0; i < pageLists.length; i++) {
//       const page = pageLists[i];
//       innerQuery += `allContentfulPage${page} {
//         nodes {
//           slug
//           sys {
//             contentType {
//               sys {
//                 id
//               }
//             }
//           }
//         }
//       }`
//     };

//     const result = await graphql(`query MyQuery { ${innerQuery} }`);

//     return result;
//   }
// };

const pageLists = [
  'Home',
  'Resume'
];

module.exports = {
  getQueryData: async (graphql) => {
    let innerQuery = '';

    for (let i = 0; i < pageLists.length; i++) {
      const page = pageLists[i];
      innerQuery += `allContentfulPage${page} {
        nodes {
          slug
          sys {
            contentType {
              sys {
                id
              }
            }
          }
        }
      }`
    };

    const result = await graphql(`query MyQuery { ${innerQuery} }`);

    let formattedData = [];
    for (const key in result.data) {
      const {
        nodes: [{
          slug,
          sys: { contentType: { sys: {
            id: contentType
          }}}
        }]
      } = result.data[key];

      formattedData.push({ slug, contentType});
    };

    return formattedData;
  }
};