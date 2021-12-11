import { QueryDataPages_type } from "../../gatsby-node";

// interface Result_type {

// }

const pageLists = [
  'Home',
  'Resume'
] as const;

export const getQueryData = async (graphql: any): Promise<QueryDataPages_type[]> => {
  let innerQuery: string = '';

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

  let formattedData: QueryDataPages_type[] = [];
  for (const key in result.data) {
    const {
      nodes: [{
        slug,
        sys: { contentType: { sys: {
          id: contentType
        }}}
      }]
    } = result.data[key];

    formattedData.push({slug, contentType});
  };

  return formattedData;
}