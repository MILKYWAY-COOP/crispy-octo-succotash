import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Syne+Mono&display=swap');
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    
}
body {
    color: hsl(192, 100%, 9%);
    font-family: 'Syne Mono', monospace;
    font-size: 1.15em;
    margin: 0;
}
p {
    opacity: 0.6;
    line-height: 1.5;
}
img {
    max-width: 100%;
}
`;

export default GlobalStyles;
