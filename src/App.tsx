import { ThemeProvider } from 'styled-components';
import { BodyStyles } from './Components/Styles';
import Nav from './Components/Nav';

import {useState} from 'react';

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

  mainTextColor: '#fff',
  secondaryTextColor: '#eeeeee',
  themeDotBorderColor: '#fff',
  previewBgColor: 'rgb(81, 90, 72,0.8)',
  previewShadowColor: '#2a2f25',

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
      <BodyStyles />
      <Nav
        theme={theme}
        setTheme={setTheme}
        lightTheme={lightTheme}
        purpleTheme={purpleTheme}
        blueTheme={blueTheme}
        greenTheme={greenTheme}
      />
    </ThemeProvider>
  );
}

export default App;
