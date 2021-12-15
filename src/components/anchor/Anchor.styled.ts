import styled from 'styled-components';
import { Link as GatsbyLink } from 'gatsby';
import { Colors } from '../../styled/variables';

interface Pseudo_type {
  pseudoWidth: string;
}

const anchor = `
  color: ${Colors.persimmon};
  text-decoration: none;

  strong {
    font-weight: bold;
  }
`;

const PseudoAnchor = styled.span`
  position: absolute;
  top: 50%;
  left: 0;
  transform: translateY(-50%);
  padding: 5px 0;
  width: 100%;
  max-width: 0;
  color: ${Colors.dodger};
  overflow: hidden;
  pointer-events: none;
  transition: max-width 0.3s ease-in-out;

  strong {
    font-weight: bold;
  }
`;

export const AnchorStyled = styled.div<Pseudo_type>`
  position: relative;
  display: table;

  &:hover {
    [class*='Hover'] {
      max-width: ${props => props.pseudoWidth}px;
    }
  }
`;

export const GatsbyLinkAnchor = styled(GatsbyLink)`${anchor}`;

export const BasicAnchor = styled.a`${anchor}`;

export const Hover = styled(PseudoAnchor)`
  
`;

export const Active = styled(PseudoAnchor)`
  
`;