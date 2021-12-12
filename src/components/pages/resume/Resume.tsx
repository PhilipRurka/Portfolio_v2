import React, { FC } from 'react';
import { IPageResumeFields } from '../../../../@types/generated/contentful';
import {
  ResumeStyled
} from './Resume.styled';
import { renderRichText } from "gatsby-source-contentful/rich-text"

const Resume: FC<{ data: IPageResumeFields }> = (props) => {
  const {
    title,
    tags,
    content,
  } = props.data

  return (
    <ResumeStyled>
      <h1>{title}</h1>
      {tags.map((tag, i) => (
        <h2 key={i}>{tag}</h2>
      ))}
      {renderRichText(content as any)}

    </ResumeStyled>
  );
};

export default Resume;