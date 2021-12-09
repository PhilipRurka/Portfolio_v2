import React, { FC } from 'react';
import Home from './Home';

interface Home_type {

};

const HomeContainer: FC<Home_type> = (props) => {
const propsObj = {

};
  return <Home props='{...propsObj}' />;
};

export default HomeContainer;