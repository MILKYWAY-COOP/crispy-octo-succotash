import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;   
}

body {
    background-color: ${(props: any) => props.theme.secondaryColor};
    height: 100vh;
}
`;

export default GlobalStyles;
