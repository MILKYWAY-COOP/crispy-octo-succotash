import { FaGithub, FaEnvelope } from 'react-icons/fa';
import { StyledNav } from './Styles/Nav.styled';
import Theme from './Theme';

const Nav = (props: any) => {
  const { setTheme, lightTheme, blueTheme, purpleTheme, greenTheme, theme } =
    props;

  return (
    <StyledNav>
      <h1>Steved!</h1>
      <div className='icons'>
        <Theme
          theme={theme}
          setTheme={setTheme}
          lightTheme={lightTheme}
          purpleTheme={purpleTheme}
          blueTheme={blueTheme}
          greenTheme={greenTheme}
        />
      </div>
      <div className='handles'>
        <a href='mailto:muchendumaina66@gmail.com'>
          <FaEnvelope />
        </a>
        <a
          href='https://github.com/steeeved'
          target='_blank'
          rel='noopener noreferrer'
        >
          <FaGithub />
        </a>
      </div>
    </StyledNav>
  );
};

export default Nav;
