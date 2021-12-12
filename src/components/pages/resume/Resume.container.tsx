import React, { FC } from 'react';
import { graphql, PageProps } from 'gatsby';
import Resume from './Resume';
import { IPageResumeFields } from '../../../../@types/generated/contentful';

interface ResumePage_type {
  contentfulPageResume: IPageResumeFields
}

const ResumeContainer: FC<PageProps<ResumePage_type>> = (props) => {
  const {
    contentfulPageResume: data
  } = props.data;

  return <Resume data={data} />;
};

export const query = graphql`
  query Resumepage {
    contentfulPageResume {
      content {
        raw
      }
      tags
      title
    }
  }
`

export default ResumeContainer;