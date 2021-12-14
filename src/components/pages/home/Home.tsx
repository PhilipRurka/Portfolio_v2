import React, { FC } from 'react';
import { PageWrapper } from '../../../styled/layout';
// import Header from '../../header/Header';
import {
  HomeStyled
} from './Home.styled';

interface Home_type {

};

const Home: FC<any> = (props) => {

  return (
    <PageWrapper>
      {/* <Header /> */}
      <HomeStyled>

      </HomeStyled>
    </PageWrapper>
  );
};

export default Home;