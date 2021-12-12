import React, { FC } from 'react';
import { graphql, PageProps, useStaticQuery } from 'gatsby';
import Resume from './Resume';
import { IPageResumeFields } from '../../../../@types/generated/contentful';

interface ResumePage_type {
  contentfulPageResume: IPageResumeFields
}

const ResumeContainer: FC<PageProps> = (props) => {
    const queryData: ResumePage_type = useStaticQuery(graphql`
    query Resumepage {
      contentfulPageResume {
        content {
          raw
        }
        tags
        title
      }
    }
  `);

  const {
    contentfulPageResume: data
  } = queryData;

  return <Resume data={data} />;
};

export default ResumeContainer;