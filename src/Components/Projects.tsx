import { useState, useRef } from 'react';
import classNames from 'classnames';

import { FaDownload } from 'react-icons/fa';
import { StyledProject } from './Styles/Project.styled';
import { Welcome, Piggery, Chat, Weather, Meme, Movies, Koimbi } from './Jobs';

export const Projects = () => {
  const [leftCard, setLeftCard] = useState(<Welcome />);
  const [flip, setFlip] = useState(false);
  const [is180, setIs180] = useState(0);

  const pigRef = useRef<HTMLSpanElement>(null);
  const memeRef = useRef<HTMLSpanElement>(null);
  const chatRef = useRef<HTMLSpanElement>(null);
  const weatherRef = useRef<HTMLSpanElement>(null);

  const classes = classNames('leftDiv', {
    flip: flip
  });
  const classes2 = classNames('card', {
    rotate180: (is180 / 180) % 2 === 0
  });

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
    let id = e.currentTarget.id;

    if (id === 'Piggery') {
      setFlip(!flip);
      setTimeout(() => {
        setLeftCard(<Piggery />);
      }, 200);
    } else if (id === 'Meme') {
      setFlip(!flip);
      setTimeout(() => {
        setLeftCard(<Meme />);
      }, 200);
    } else if (id === 'Chat') {
      setFlip(!flip);
      setTimeout(() => {
        setLeftCard(<Chat />);
      }, 200);
    } else if (id === 'Weather') {
      setFlip(!flip);
      setTimeout(() => {
        setLeftCard(<Weather />);
      }, 200);
    } else if (id === 'Movies') {
      setFlip(!flip);
      setTimeout(() => {
        setLeftCard(<Movies />);
      }, 200);
    } else if (id === 'Koimbi') {
      setFlip(!flip);
      setTimeout(() => {
        setLeftCard(<Koimbi />);
      }, 200);
    }
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
                  <span ref={pigRef} id='Piggery' onClick={leftCardFunc}>
                    Piggery Unit
                  </span>
                </li>
                <li>
                  <span ref={memeRef} id='Meme' onClick={leftCardFunc}>
                    2022 Elections
                  </span>
                </li>
                <li>
                  <span ref={weatherRef} id='Weather' onClick={leftCardFunc}>
                    Digikids
                  </span>
                </li>
              </ul>
            </div>
            <div className='bottomLeft'>
              <ul>
                <li>
                  <span ref={chatRef} id='Movies' onClick={leftCardFunc}>
                    Get Movies by City
                  </span>
                </li>
                <li>
                  <span ref={chatRef} id='Koimbi' onClick={leftCardFunc}>
                    Koimbi Children's Home
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
