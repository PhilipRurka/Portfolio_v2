import React, { FC } from 'react';
import Resume from './Resume';

interface Resume_type {

};

const ResumeContainer: FC<Resume_type> = (props) => {
const propsObj = {

};
  return <Resume props='{...propsObj}' />;
};

export default ResumeContainer;