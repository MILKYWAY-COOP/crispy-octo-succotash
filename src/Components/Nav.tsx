import { FaGithub, FaEnvelope } from 'react-icons/fa';
import { useRef } from 'react';
import { StyledNav } from './Styles/Nav.styled';

//create an interface for the setTheme function

const Nav = (props: any) => {
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
    <StyledNav>
      <h1>Steved!</h1>
      <div className='icons'>
        <button ref={lightRef} id='light' onClick={handleThemeChange}></button>
        <button ref={blueRef} id='blue' onClick={handleThemeChange}></button>
        <button
          ref={purpleRef}
          id='purple'
          className='active'
          onClick={handleThemeChange}
        ></button>
        <button ref={greenRef} id='green' onClick={handleThemeChange}></button>
      </div>
      <div className='handles'>
        <a href='mailto:muchendumaina66@gmail.com'>
          <FaEnvelope />
        </a>
        <a href='https://github.com/steeeved' target='_blank'>
          <FaGithub />
        </a>
      </div>
    </StyledNav>
  );
};

export default Nav;
