import { useState, useRef } from 'react';

import { FaDownload } from 'react-icons/fa';
import { StyledProject } from './Styles/Project.styled';
import { Welcome, Piggery, Chat, Weather, Meme } from './Jobs';

export const Projects = () => {
  const [leftCard, setLeftCard] = useState(<Welcome />);

  const pigRef = useRef<HTMLSpanElement>(null);
  const memeRef = useRef<HTMLSpanElement>(null);
  const chatRef = useRef<HTMLSpanElement>(null);
  const weatherRef = useRef<HTMLSpanElement>(null);

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
      setLeftCard(<Piggery />);
      
    } else if (id === 'Meme') {
      setLeftCard(<Meme />);
      
    } else if (id === 'Chat') {
      setLeftCard(<Chat />);
      
    } else if (id === 'Weather') {
      setLeftCard(<Weather />);
      
    }
  };

  return (
    <StyledProject>
      <div className='leftDiv'>{leftCard}</div>
      <div className='rightDiv'>
        <h1>My Work</h1>
        <div className='bottom'>
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
            <li>
              <span ref={chatRef} id='Chat' onClick={leftCardFunc}>
                Chat App
              </span>
            </li>
          </ul>
          <div className='btnDiv'>
            <div className='floater'>Download CV</div>
            <FaDownload onClick={downloadFunc} className='btn' />
          </div>
        </div>
      </div>
    </StyledProject>
  );
};
