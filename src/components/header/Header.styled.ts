import { Link as GatsbyLink } from 'gatsby';
import styled from 'styled-components';
import { Container } from '../../styled/layout';
import { Colors } from '../../styled/variables';
import Anchor from '../anchor/Anchor';
import { Github, Linkedin } from '../svgs';

const socialIcon_share: string = `
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
    height: 4px;
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

export const Link = styled(Anchor)`
  padding: 20px 30px;
  text-decoration: none;

  & ~ [class*='Hover'],
  & ~ [class*='Active'] {
    &::before,
    &::after {
      content: '';
      position: absolute;
      left: 0;
      width: calc(100% - 30px);
      height: 4px;
    }

    &::before {
      top: 0;
    }

    &::after {
      bottom: 0;
    }
  }

  & ~ [class*='Hover'] {
    &::before,
    &::after {
      background-color: ${Colors.dodger};
    }
  }

  & ~ [class*='Active'] {
    &::before,
    &::after {
      background-color: ${Colors.eucalyptus};
    }
  }
`;

export const SocialLinks = styled.div`
  display: flex;
  align-items: center;
`;

export const Email = styled(Anchor)`
  font-size: 14px;
  flex: 1;
  letter-spacing: 0.5px;
`;

export const GithubSocial = styled(Anchor)`
  ${socialIcon_share}

`;

export const GithubIcon = styled(Github)`
   
`;

export const LinkedinSocial = styled(Anchor)`
  ${socialIcon_share}
  
`;

export const LinkedinIcon = styled(Linkedin)`

`;