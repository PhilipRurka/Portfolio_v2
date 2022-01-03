import { Link as GatsbyLink } from 'gatsby';
import styled from 'styled-components';
import { BreakObj, Container } from '../../styled/layout';
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

  ${BreakObj.xs.breakpoint.media} {
    padding-bottom: 3px;

    .gatsby-image-wrapper > div {
      max-width: 40px !important;
    }
  }
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
  ${BreakObj.xs.breakpoint.media} {
    display : none;
  }
`;

export const BurgerNav = styled.button(() => {
  const containerHeight: number = 35;
  const lineHeight: number = 2;
  const spacing: number = (containerHeight - lineHeight) / 7;
  const dimention: number = containerHeight - spacing;

  return `
    display: none;
    position: relative;
    height: ${dimention}px;
    width: ${dimention}px;

    span {
      position: absolute;
      top: 0;
      left: 0;
      width: ${dimention}px;
      height: ${lineHeight}px;
      background-color: transparent;
      transition: transform 0.3s ease-in-out,
                  width 0.3s ease-in-out;

      &::before,
      &::after {
        content: '';
        position: absolute;
        left: 0;
        width: 100%;
        height: ${lineHeight}px;
        background-color: black;
        transition: transform 0.3s ease-in-out;
      }

      &:first-child {
        transform: translateY(${spacing}px);
  
        &::before {
          transform: translateY(-${spacing}px);
        }
  
        &::after {
          transform: translateY(calc(${spacing}px));
        }
      }
  
      &:last-child {
        transform: translateY(${spacing * 5}px);
  
        &::before {
          transform: translateY(-${spacing}px);
        }
  
        &::after {
          transform: translateY(${spacing}px);
        }
      }
    }

    &.opened {

      span {
        width: 43px;

        &:first-child {
          transform: rotate(45deg) translate(5.3px, 14.5px);
    
          &::before {
            transform: translateY(0);
          }
    
          &::after {
            transform: translateY(0);
          }
        }
    
        &:last-child {
          transform: rotate(-45deg) translate(-14.5px, 5.3px);
    
          &::before {
            transform: translateY(0);
          }
    
          &::after {
            transform: translateY(0);
          }
        }
      }
    }

    ${BreakObj.xs.breakpoint.media} {
      display : block;
    }
  `}
);

// export const MobileNav = styled.div`
  
// `;

export const Branding = styled.div`
  
`;

export const LogoLink = styled(GatsbyLink)`

`;

export const Links = styled.ul`
  display: flex;
`;

export const LinkWrapper = styled.li`
  [class*='Active'] {
    /* &::before,
    &::after {
      content: '';
      position: absolute;
      left: 0;
      width: 100%;
      height: 4px;
      background-color: ${Colors.eucalyptus};
    }

    &::before {
      top: 0;
    }

    &::after {
      bottom: 0;
    } */
  }
  
`;

export const Link = styled(Anchor)`
  text-decoration: none;
  padding: 20px 30px;
`;

export const SocialLinks = styled.div`
  display: flex;
  align-items: center;

  ${BreakObj.xs.breakpoint.media} {
    display : none;
  }
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