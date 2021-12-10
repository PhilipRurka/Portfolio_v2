import React, { FC } from 'react';
import {
  HeaderStyled,
  TopNav,
  BottomNav, 
  BurgerNav,
  MobileNav,
  Branding,
  Logo,
  Name
} from './Header.styled';

const Header: FC<any> = () => {
  return (
    <HeaderStyled>
      <TopNav>
        <Branding>
          <Logo />
          <Name>
            Philip Rurka
          </Name>
        </Branding>
      </TopNav>
      <BottomNav>

      </BottomNav>
      <BurgerNav>

      </BurgerNav>
      <MobileNav>

      </MobileNav>
    </HeaderStyled>
  );
};

export default Header;