import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';
import { Fonts } from './variables';

export const Reset = createGlobalStyle`
  ${reset}

  * {
    box-sizing: border-box;
  }

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

  button {
    border: none;
    background-color: transparent;
    cursor: pointer;
    padding: 0;
  }
`;