import { Link } from 'gatsby';
import styled from 'styled-components';
import { genContainer } from '../../styled/layout';
import { Colors } from '../../styled/variables';
import { Github, Linkedin } from '../svgs';

const socialIcon_share: string = `
  width: 30px;
  height: 30px;
  color: ${Colors.persimmon};
`;

export const HeaderStyled = styled.div`
  ${genContainer('md')}
  display: flex;
  flex-direction: column;
  padding-top: 30px;
`;

export const BrandingLinks = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 10px;
`;

export const PageLinks = styled.div`
  
`;

export const BurgerNav = styled.div`
  
`;

export const MobileNav = styled.div`
  
`;

export const Branding = styled.div`
  
`;

export const LogoLink = styled(Link)`

`;

export const Links = styled.ul`
  
`;

export const LinkWrapper = styled.li`
  
`;

export const SocialLinks = styled.div`
  display: flex;
  align-items: center;
`;

export const Email = styled.a`
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
  ${socialIcon_share}
   
`;

export const LinkedinSocial = styled.a`
  ${socialIcon_share}
  
`;

export const LinkedinIcon = styled(Linkedin)`
   ${socialIcon_share}
`;