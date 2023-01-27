import {
  FaHtml5,
  FaCss3,
  FaSass,
  FaPython,
  FaReact,
  FaJs,
  FaWordpress
} from 'react-icons/fa';
import { SiTypescript, SiFirebase } from 'react-icons/si';
import { FooterStyled } from './Styles/Footer.styled';
import Theme from './Theme';

export const Footer = (props: any) => {
  const { setTheme, lightTheme, blueTheme, purpleTheme, greenTheme, theme } =
    props;

  const year = new Date().getFullYear();

  return (
    <FooterStyled>
      <div className='theme'>
        <Theme
          theme={theme}
          setTheme={setTheme}
          lightTheme={lightTheme}
          purpleTheme={purpleTheme}
          blueTheme={blueTheme}
          greenTheme={greenTheme}
        />
      </div>
      <div className='icons'>
        <FaWordpress />
        <SiFirebase />
        <FaHtml5 />
        <FaCss3 />
        <FaSass />
        <FaJs />
        <FaReact />
        <SiTypescript />
        <FaPython />
      </div>
      <div className='rights'>
        <p>
          &copy;{year}. A{' '}
          <a
            href='https://milkyway-coop.github.io/'
            target='_blank'
            rel='noopener noreferrer'
          >
            MILKYWAY
          </a>{' '}
          PRODUCTION. All rights reserved
        </p>
      </div>
    </FooterStyled>
  );
};
