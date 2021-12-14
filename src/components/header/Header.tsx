import { Link } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';
import React, { FC } from 'react';
import { HeaderQuery } from '../../../@types/generated/graphql';
import {
  HeaderStyled,
  // BurgerNav,
  // MobileNav,
  Branding,
  BrandingLinks,
  PageLinks,
  Links,
  LinkWrapper,
  SocialLinks,
  Email,
  GithubSocial,
  LinkedinSocial,
  GithubIcon,
  LinkedinIcon,
  LogoLink
} from './Header.styled';

const Header: FC<QueryData<HeaderQuery>> = (props) => {

  const menuLinks = props.queryData.site?.siteMetadata?.menuLinks;

  return (
    <HeaderStyled>
      <BrandingLinks>
        <Branding>
          <LogoLink
            to='/'
            aria-label='Github Profile Link' >
            <StaticImage
              src='../../images/philip-rurka-logo.png'
              width={69}
              height={80}
              objectFit='contain'
              placeholder='tracedSVG'
              alt="Philip Rurka Logo" />
          </LogoLink>
        </Branding>
        <SocialLinks>
          <Email href='mailto:hey@philiprurka.com'>
            hey@<strong>philiprurka</strong>.com
          </Email>
          <GithubSocial
            href='https://github.com/philiprurka'
            target='_blank'
            rel="noopener noreferrer"
            aria-label='Github Profile Link, opens in another window' >
            <GithubIcon />
          </GithubSocial>
          <LinkedinSocial
            href='https://www.linkedin.com/in/philiprurka/'
            target='_blank'
            rel="noopener noreferrer"
            aria-label='Linkedin Profile Link, opens in another window' >
            <LinkedinIcon />
          </LinkedinSocial>
        </SocialLinks>
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