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

const PseudoAnchor = styled.a`
  position: absolute;
  top: 50%;
  left: 0;
  transform: translateY(-50%);
  max-width: 0;
  padding-right: 0 !important;
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
  overflow: hidden;

  &:hover {
    [class*='Hover'] {
      max-width: ${props => props.pseudoWidth}px;
    }
  }

  .active ~ [class*='Active'] {
    max-width: ${props => props.pseudoWidth}px;
  }
`;

export const GatsbyLinkAnchor = styled(GatsbyLink)`
  ${anchor}

  &.active ~ [class*='Hover'] {
    display: none;
  }
`;

export const BasicAnchor = styled.a`
  ${anchor}
`;

export const Active = styled(PseudoAnchor)<{ activeType: string }>`
  color: ${Colors.eucalyptus};
`;

export const Hover = styled(PseudoAnchor)`
  color: ${Colors.dodger};
`;