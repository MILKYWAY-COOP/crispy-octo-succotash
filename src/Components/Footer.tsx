import {
  FaHtml5,
  FaCss3,
  FaSass,
  FaPython,
  FaReact,
  FaJs
} from 'react-icons/fa';
import { SiTypescript, SiFirebase } from 'react-icons/si';

import { FooterStyled } from './Styles/Footer.styled';

export const Footer = () => {
  return (
    <FooterStyled>
      <div className='icons'>
        <FaHtml5 />
        <FaCss3 />
        <FaSass />
        <SiFirebase />
        <SiTypescript />
        <FaReact />
        <FaPython />
        <FaJs />
      </div>
      <div className='rights'>
        <p>
          &copy; 2022. A <a href='https://milkyway-coop.github.io/' target="_blank">MILKYWAY</a>{' '}
          PRODUCTION. All rights reserved
        </p>
      </div>
    </FooterStyled>
  );
};
