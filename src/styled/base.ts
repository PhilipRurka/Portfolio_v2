import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

export const Reset = createGlobalStyle`
  ${reset}
  
  a,
  span {
    display: block;
  }
`;