import { FaDownload } from 'react-icons/fa';
import { StyledProject } from './Styles/Project.styled';

export const Projects = () => {
  const downloadFunc = () => {
    fetch('SamplePDF.pdf').then((response) => {
      response.blob().then((blob) => {
        const fileURL = window.URL.createObjectURL(blob);
        let alink = document.createElement('a');
        alink.href = fileURL;
        alink.download = 'Resume.pdf';
        alink.click();
      });
    });
  };

  return (
    <StyledProject>
      <div className='leftDiv'>
        <h1 className='welcome'>
          <span aria-hidden='true'>WELCOME</span>
          WELCOME
          <span aria-hidden='true'>WELCOME</span>
        </h1>
        <div className='leftPara'>
          <p>
            I am a full stack developer with a passion for creating beautiful
            websites and applications. I am currently working as a software
            engineer at Digikids. I am also a freelance developer and have
            worked with many clients to create their websites and applications.
            I am currently looking for a full time position as a software
            engineer.
          </p>
        </div>
      </div>
      <div className='rightDiv'>
        <h1>My Work</h1>
        <div className='bottom'>
          <ul>
            <li>
              <span>Piggery Unit</span>
            </li>
            <li>
              <span>Meme App</span>
            </li>
            <li>
              <span>Weather App</span>
            </li>
            <li>
              <span>Chat App</span>
            </li>
          </ul>
          <div className='btnDiv'>
            <FaDownload onClick={downloadFunc} className='btn' />
          </div>
        </div>
      </div>
    </StyledProject>
  );
};
