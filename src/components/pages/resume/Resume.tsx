import React, { FC } from 'react';
import { IPageResumeFields } from '../../../../@types/generated/contentful';
import { ContentfulPageResumeContentFilterInput } from '../../../../gatsby/gatsby-graphql';
import {
  ResumeStyled
} from './Resume.styled';

const Resume: FC<{ data: IPageResumeFields }> = (props) => {
  const {
    title,
    tags,
    content,
  } = props.data

  const { raw } = content as ContentfulPageResumeContentFilterInput;

  return (
    <ResumeStyled>
      <h1>{title}</h1>
      {tags.map(tag => (
        <h2>{tag}</h2>
      ))}

    </ResumeStyled>
  );
};

export default Resume;