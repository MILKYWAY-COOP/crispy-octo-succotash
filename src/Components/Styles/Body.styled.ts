import { createGlobalStyle } from 'styled-components';

export const Body = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  body {
    background: linear-gradient(${(props: any) => props.theme.mainColor},${(props: any) => props.theme.mainColor}), url(/resume.webp);
    background-repeat: no-repeat;
    background-attachment: fixed;
    background-size: cover;
    color: hsl(192, 100%, 9%);
    font-family: 'Syne Mono', monospace;
    font-size: 1.15em;
    margin: 0;
    transition: all 0.3s ease;
  }
  p {
    opacity: 0.6;
    line-height: 1.5;
  }
  img {
    max-width: 100%;
  }
`;
