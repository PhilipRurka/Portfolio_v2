import styled from "styled-components";

export const LayoutStyled = styled.div`

`;

const containerSize = {
  sm:   '600px',
  md:   '1000px',
  lg:   '1200px',
  full: '100vw'
} as const;

export const genContainer = (size: keyof typeof containerSize): string => {
  return `
    max-width: ${containerSize[size]};
    margin: auto;
  `
}