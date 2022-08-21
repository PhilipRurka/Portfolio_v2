import React, { FC } from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import {
  BrandingLinksStyled,
  Branding,
  LogoLink,
  SocialLinks,
  Email,
  GithubSocial,
  GithubIcon,
  LinkedinSocial,
  LinkedinIcon,
  BurgerButton
} from '../../Header.styled';

type BrandingLinks_Type = {
  openedBurger: boolean;
  handleBurgerClick: () => void;
}

const BrandingLinks: FC<BrandingLinks_Type> = ({
  openedBurger,
  handleBurgerClick
}) => {

  return (
    <BrandingLinksStyled>
      <Branding>
        <LogoLink
          to='/'
          aria-label='Homepage Link' >
          <StaticImage
            src='../../images/philip-rurka-logo.png'
            width={69}
            height={80}
            objectFit='contain'
            placeholder='tracedSVG'
            alt="Philip Rurka Logo" />
        </LogoLink>
      </Branding>
      <SocialLinks className='desktop-only'>
        <Email to='mailto:hey@philiprurka.com'>
          hey@<strong>philiprurka</strong>.com
        </Email>
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
      <BurgerButton
        className={openedBurger ? 'opened' : ''}
        aria-label='Open Mobile Menu'
        onClick={handleBurgerClick} >
        <span aria-hidden />
        <span aria-hidden />
      </BurgerButton>
    </BrandingLinksStyled>
  );
};

export default BrandingLinks;