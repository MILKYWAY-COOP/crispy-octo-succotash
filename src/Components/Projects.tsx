import { useState, useRef } from 'react';
import classNames from 'classnames';

import { FaDownload } from 'react-icons/fa';
import { StyledProject } from './Styles/Project.styled';
import {
  Welcome,
  Piggery,
  Chat,
  Weather,
  Meme,
  Movies,
  Koimbi,
  SmartLife
} from './Jobs';

const leftCardMap = {
  Piggery: <Piggery />,
  Meme: <Meme />,
  Chat: <Chat />,
  Weather: <Weather />,
  Movies: <Movies />,
  Koimbi: <Koimbi />,
  SmartLife: <SmartLife />
};

export const Projects = () => {
  const [leftCard, setLeftCard] = useState(<Welcome />);
  const [flip, setFlip] = useState(false);
  const [is180, setIs180] = useState(180);
  const divRef = useRef<HTMLSpanElement>(null);

  const classes = classNames(['leftDiv', { flip }]).toString();
  const classes2 = classNames([
    'card',
    { rotate180: (is180 / 180) % 2 === 0 }
  ]).toString();

  const downloadFunc = () => {
    fetch('Resume.pdf').then((response) => {
      response.blob().then((blob) => {
        const fileURL = window.URL.createObjectURL(blob);
        let alink = document.createElement('a');
        alink.href = fileURL;
        alink.download = 'Resume.pdf';
        alink.click();
      });
    });
  };
  const leftCardFunc = (e: React.MouseEvent<HTMLSpanElement, MouseEvent>) => {
    const id = e.currentTarget.id as keyof typeof leftCardMap;
    if (!leftCardMap[id]) return;
    setFlip((prevFlip) => !prevFlip);

    setTimeout(() => {
      setLeftCard(leftCardMap[id]);
    }, 200);

    setTimeout(() => {
      setIs180((prev) => (prev += 180));
    }, 250);
  };

  return (
    <StyledProject>
      <div className={classes}>
        <div className={classes2}>{leftCard}</div>
      </div>
      <div className='rightDiv'>
        <h1>My Work</h1>
        <div className='main'>
          <div className='top'>
            <div className='bottomRight'>
              <ul>
                <li>
                  <span ref={divRef} id='Piggery' onClick={leftCardFunc}>
                    Piggery Unit
                  </span>
                </li>
                <li>
                  <span id='Meme' onClick={leftCardFunc}>
                    2022 Elections
                  </span>
                </li>
                <li>
                  <span id='Weather' onClick={leftCardFunc}>
                    Digikids
                  </span>
                </li>
              </ul>
            </div>
            <div className='bottomLeft'>
              <ul>
                <li>
                  <span id='Movies' onClick={leftCardFunc}>
                    Get Movies by City
                  </span>
                </li>
                <li>
                  <span id='Koimbi' onClick={leftCardFunc}>
                    Koimbi Children's Home
                  </span>
                </li>
                <li>
                  <span id='SmartLife' onClick={leftCardFunc}>
                    Smart Life
                  </span>
                </li>
              </ul>
            </div>
          </div>
          <div className='bottom'>
            <div className='btnDiv'>
              <div className='floater'>Download CV</div>
              <FaDownload onClick={downloadFunc} className='btn' />
            </div>
          </div>
        </div>
      </div>
    </StyledProject>
  );
};
