import React, { FC } from 'react';
import { HeaderQuery } from '../../../@types/generated/graphql';
import { BrandingLinks } from './components';
import {
  HeaderStyled,
  PageLinks,
  Links_Desktop,
  Links_Mobile,
  LinkWrapper_Desktop,
  LinkWrapper_Mobile,
  SocialLinks,
  Email,
  GithubSocial,
  LinkedinSocial,
  GithubIcon,
  LinkedinIcon,
  Link_Desktop,
  Link_Mobile,
  MobileNavWrapper,
  MobileNavContainer
} from './Header.styled';

type Header_type = {
  queryData: HeaderQuery;
  openedBurger: boolean;
  handleBurgerClick: () => void;
}

const Header: FC<Header_type> = (props) => {
  const {
    openedBurger,
    handleBurgerClick
  } = props;
  const menuLinks = props.queryData.site?.siteMetadata?.menuLinks;

  return (
    <HeaderStyled>
      <BrandingLinks
        openedBurger={openedBurger}
        handleBurgerClick={handleBurgerClick} />
      <PageLinks>
        <Links_Desktop>
          {menuLinks && menuLinks.map((item, i) => {
            if(!item || !item.link || !item.name) return <></>

            return (
              <LinkWrapper_Desktop key={`pagelink-${i}`}>
                <Link_Desktop
                  to={item.link}
                  activeType='current' >
                  {item.name}
                </Link_Desktop>
              </LinkWrapper_Desktop>
            )
          })}
        </Links_Desktop>
      </PageLinks>
      <MobileNavWrapper
        id='mobileMenu'
        mobileNavActive={openedBurger}
        aria-hidden={!openedBurger} >
        <MobileNavContainer>
        <Links_Mobile>
          {menuLinks && menuLinks.map((item, i) => {
            if(!item || !item.link || !item.name) return <></>

            return (
              <LinkWrapper_Mobile key={`pagelink-${i}`}>
                <Link_Mobile
                  to={item.link}
                  activeType='current' >
                  {item.name}
                </Link_Mobile>
              </LinkWrapper_Mobile>
            )
          })}
        </Links_Mobile>
          <Email to='mailto:hey@philiprurka.com'>
            hey@<strong>philiprurka</strong>.com
          </Email>
          <SocialLinks>
            <GithubSocial
              to='https://github.com/philiprurka'
              aria-label='Github Profile Link, opens in another window' >
              <GithubIcon />
            </GithubSocial>
            <LinkedinSocial
              to='https://www.linkedin.com/in/philiprurka/'
              aria-label='Linkedin Profile Link, opens in another window' >
              <LinkedinIcon />
            </LinkedinSocial>
          </SocialLinks>
        </MobileNavContainer>
      </MobileNavWrapper>
    </HeaderStyled>
  );
};

export default Header;