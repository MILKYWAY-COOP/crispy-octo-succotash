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
        <FaHtml5 />
        <FaCss3 />
        <FaSass />
        <SiFirebase />
        <FaWordpress />
        <FaPython />
        <FaReact />
        <FaJs />
        <SiTypescript />
      </div>
      <div className='rights'>
        <p>
          &copy;2022. A{' '}
          <a href='https://milkyway-coop.github.io/' target='_blank'>
            MILKYWAY
          </a>{' '}
          PRODUCTION. All rights reserved
        </p>
      </div>
    </FooterStyled>
  );
};
