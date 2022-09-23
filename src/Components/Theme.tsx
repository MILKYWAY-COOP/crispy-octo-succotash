import { useRef } from 'react';
import { ThemeStyled } from './Styles/Theme.styled';

const Theme = (props: any) => {
  const { setTheme, lightTheme, blueTheme, purpleTheme, greenTheme, theme } =
    props;
  const lightRef = useRef<HTMLButtonElement>(null);
  const blueRef = useRef<HTMLButtonElement>(null);
  const purpleRef = useRef<HTMLButtonElement>(null);
  const greenRef = useRef<HTMLButtonElement>(null);

  const handleThemeChange = (e: React.MouseEvent<HTMLButtonElement>) => {
    // get the id of the clicked element
    const id = e.currentTarget.id;
    console.log(id);
    console.log(theme);
    if (id === 'light') {
      setTheme(lightTheme);
      lightRef.current?.classList.add('active');
      blueRef.current?.classList.remove('active');
      purpleRef.current?.classList.remove('active');
      greenRef.current?.classList.remove('active');
    } else if (id === 'blue') {
      setTheme(blueTheme);
      lightRef.current?.classList.remove('active');
      blueRef.current?.classList.add('active');
      purpleRef.current?.classList.remove('active');
      greenRef.current?.classList.remove('active');
    } else if (id === 'purple') {
      setTheme(purpleTheme);
      lightRef.current?.classList.remove('active');
      blueRef.current?.classList.remove('active');
      purpleRef.current?.classList.add('active');
      greenRef.current?.classList.remove('active');
    } else if (id === 'green') {
      setTheme(greenTheme);
      lightRef.current?.classList.remove('active');
      blueRef.current?.classList.remove('active');
      purpleRef.current?.classList.remove('active');
      greenRef.current?.classList.add('active');
    }
    };
    
    return (
      <ThemeStyled>
        <button ref={lightRef} id='light' onClick={handleThemeChange}></button>
        <button ref={blueRef} id='blue' onClick={handleThemeChange}></button>
        <button
          ref={purpleRef}
          id='purple'
          className='active'
          onClick={handleThemeChange}
        ></button>
        <button ref={greenRef} id='green' onClick={handleThemeChange}></button>
      </ThemeStyled>
    );
};

export default Theme;
