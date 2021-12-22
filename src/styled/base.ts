import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';
import { Fonts } from './variables';

export const Reset = createGlobalStyle`
  ${reset}

  body {
    font-family: 'Noto Sans'
  }

  a,
  span {
    display: block;
  }

  a {
    text-decoration: none;
  }
`;