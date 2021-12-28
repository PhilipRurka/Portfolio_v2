import React, { FC } from 'react';
import {
  HomeStyled
} from './Home.styled';

interface Home_type {

};

const Home: FC<any> = (props) => {
  console.log('This Is Home!')

  return (
    <HomeStyled>

    </HomeStyled>
  );
};

export default Home;