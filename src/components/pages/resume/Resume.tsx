import React, { FC } from 'react';
import { IPageResumeFields } from '../../../../@types/generated/contentful';
import {
  Content,
  ResumeStyled,
  Tag,
  Tags,
  Title,
  TagWrapper
} from './Resume.styled';
import { renderRichText } from "gatsby-source-contentful/rich-text";
import { PageWrapper } from '../../../styled/layout';

interface Resume_type {
  data: IPageResumeFields;
};

const Resume: FC<Resume_type> = (props) => {
  const {
    title,
    tags,
    content,
  } = props.data;

  return (
    <PageWrapper>
      <ResumeStyled>
        <Title>{title}</Title>
        <Tags>
        {tags.map((tag, i) => (
          <TagWrapper key={`tag-${i}`}>
            <Tag>{tag}</Tag>
          </TagWrapper>
        ))}  
        </Tags>
        <Content>
          {renderRichText(content as any)}
        </Content>

      </ResumeStyled>
    </PageWrapper>
  );
};

export default Resume;