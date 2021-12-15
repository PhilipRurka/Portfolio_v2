import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';
import { Fonts } from './variables';

export const Reset = createGlobalStyle`
  ${reset}

  body {
    ${Fonts.secondary}
  }

  a,
  span {
    display: block;
  }
`;