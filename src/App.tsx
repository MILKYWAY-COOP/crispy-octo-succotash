import { ThemeProvider } from 'styled-components';
import GlobalStyles from './Components/Styles/Global.Styled';
import AppStyles from './Components/Styles/App.styled';
import { Projects } from './Components/Projects';
import { Footer } from './Components/Footer';
import Nav from './Components/Nav';

import { useState } from 'react';

const blueTheme = {
  mainColor: '#152028',
  secondaryColor: '#192734',

  borderColor: '#164056',

  mainTextColor: '#fff',
  secondaryTextColor: '#eeeeee',
  themeDotBorderColor: '#fff',
  previewBgColor: 'rgb(25, 39, 52, 0.8)',
  previewShadowColor: '#111921',

  buttonColor: 'black'
};

const greenTheme = {
  mainColor: '#606856',
  secondaryColor: '#515a48',

  borderColor: '#161914',

  mainTextColor: 'hsl(192,100%,9%)',
  secondaryTextColor: '#eeeeee',
  themeDotBorderColor: '#fff',
  previewBgColor: 'rgb(81, 90, 72,0.8)',
  previewShadowColor: '#d0f5aa',

  buttonColor: '#669966'
};

const purpleTheme = {
  mainColor: '#463445',
  secondaryColor: '#382a3f',

  borderColor: '#1d1528',

  mainTextColor: '#fff',
  secondaryTextColor: '#eeeeee',
  themeDotBorderColor: '#fff',
  previewBgColor: 'rgb(29, 21, 32,0.8)',
  previewShadowColor: '#2b2e2f',

  buttonColor: '#8534a3'
};

const lightTheme = {
  mainColor: '#eaeaea',
  secondaryColor: '#fff',

  borderColor: '#c1c1c1',

  mainTextColor: 'black',
  secondaryTextColor: '#4b5156',
  themeDotBorderColor: '#24292e',
  previewBgColor: 'rgb(251, 249, 243, 0.8)',
  previewShadowColor: 'rgb(254, 220, 189)',

  buttonColor: 'black'
};

function App() {
  const [theme, setTheme] = useState(purpleTheme);

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <AppStyles>
        <Nav
          theme={theme}
          setTheme={setTheme}
          lightTheme={lightTheme}
          purpleTheme={purpleTheme}
          blueTheme={blueTheme}
          greenTheme={greenTheme}
        />
        <Projects />
        <Footer />
      </AppStyles>
    </ThemeProvider>
  );
}

export default App;
