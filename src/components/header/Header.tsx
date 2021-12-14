import { Link } from 'gatsby';
import React, { FC } from 'react';
import { HeaderQuery } from '../../../@types/generated/graphql';
import {
  HeaderStyled,
  // BurgerNav,
  // MobileNav,
  Branding,
  Logo,
  Name,
  BrandingLinks,
  PageLinks,
  Links,
  LinkWrapper
} from './Header.styled';

const Header: FC<QueryData<HeaderQuery>> = (props) => {

  const menuLinks = props.queryData.site?.siteMetadata?.menuLinks;

  return (
    <HeaderStyled>
      <BrandingLinks>
        <Branding>
          <Logo />
          <Name>
            Philip Rurka
          </Name>
        </Branding>
      </BrandingLinks>
      <PageLinks>
        <Links>
          {menuLinks && menuLinks.map((item, i) => {
            if(!item || !item.link || !item.name) return <></>

            return (
              <LinkWrapper key={`pagelink-${i}`}>
                <Link to={item.link} >
                  {item.name}
                </Link>
              </LinkWrapper>
            )
          })}
        </Links>
      </PageLinks>
      {/* <BurgerNav>

      </BurgerNav>
      <MobileNav>

      </MobileNav> */}
    </HeaderStyled>
  );
};

export default Header;