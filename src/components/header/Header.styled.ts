import { Link as GatsbyLink } from 'gatsby';
import styled from 'styled-components';
import { Container } from '../../styled/layout';
import { Colors, Fonts } from '../../styled/variables';
import { Github, Linkedin } from '../svgs';

const socialIcon_share: string = `
  color: ${Colors.persimmon};
  margin-left: 20px;

  &,
  svg {
    width: 30px;
    height: 30px;
  }
`;

export const HeaderStyled = styled.div`
  ${Container('md')}
  display: flex;
  flex-direction: column;
  padding: 30px 50px 0;
  overflow: hidden;
`;

export const BrandingLinks = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 10px;

  &::before {
    content: '';
    position: absolute;
    top: 100%;
    left: 0;
    width: 100vw;
    height: 3px;
    background-color: black;
  }
`;

export const PageLinks = styled.div`

`;

export const BurgerNav = styled.div`
  
`;

export const MobileNav = styled.div`
  
`;

export const Branding = styled.div`
  
`;

export const LogoLink = styled(GatsbyLink)`

`;

export const Links = styled.ul`
  display: flex;
`;

export const LinkWrapper = styled.li`
  
`;

export const Link = styled(GatsbyLink)`
   padding: 20px 30px;
   color: ${Colors.persimmon};
   text-decoration: none;
`;

export const SocialLinks = styled.div`
  display: flex;
  align-items: center;
`;

export const Email = styled.a`
${Fonts.secondary}
  flex: 1;
  color: ${Colors.persimmon};
  text-decoration: none;

  strong {
    font-weight: bold;
  }
`;

export const GithubSocial = styled.a`
  ${socialIcon_share}

`;

export const GithubIcon = styled(Github)`
   
`;

export const LinkedinSocial = styled.a`
  ${socialIcon_share}
  
`;

export const LinkedinIcon = styled(Linkedin)`

`;