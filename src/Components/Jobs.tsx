import { FaGithub, FaEye } from 'react-icons/fa';
import StyledWelcome from './Styles/Welcome.styled';
import StyledJob from './Styles/Jobs.Styled';

export const Welcome = () => {
  return (
    <StyledWelcome>
      <h1 className='welcome'>
        <span aria-hidden='true'>WELCOME</span>
        WELCOME
        <span aria-hidden='true'>WELCOME</span>
      </h1>
      <div className='leftPara'>
        <p>
          I am a front end developer with a passion for creating beautiful web
          applications. I am currently working part-time at{' '}
          <a href='https://digikids.co.ke/' target='_blank' rel='noreferrer'>
            Digikids
          </a>
          . My day to day work involves a lot of React js, TypeScript, GitHub
          workflows, Google Cloud and reviewing code and features from other
          Developers. I am looking for a full time position as a Software
          Developer.
        </p>
      </div>
    </StyledWelcome>
  );
};

export const Piggery = () => {
  return (
    <StyledJob>
      <div className='title'>
        <h1>Piggery Unit</h1>
      </div>

      <div className='description'>
        <p>
          An online pig management system built on React js and Typescript with
          a firebase backend. This system manages the piggery farm's records.
          The simple system contains CRUD Operation in each list in the
          database. The system stores the list of pig breeds and details.
        </p>
        <br />
      </div>

      <div className='links'>
        <a href='https://piggery-ms.web.app/' target='_blank' rel='noreferrer'>
          <FaEye />
        </a>
        <a
          href='https://github.com/castynet-studios/pms-fe'
          target='_blank'
          rel='noreferrer'
        >
          <FaGithub />
        </a>
      </div>
    </StyledJob>
  );
};

export const Meme = () => {
  return (
    <StyledJob>
      <div className='title'>
        <h1>2022 ELECTIONS</h1>
      </div>

      <div className='description'>
        <p>
          Get precise analysis of the 2022 elections. This is a web application
          built on React js and Typescript with a firebase backend.
        </p>
        <br />
        <br />
      </div>

      <div className='links'>
        <a
          href='https://milkywayelections.web.app/'
          target='_blank'
          rel='noreferrer'
        >
          <FaEye />
        </a>
        <a
          href='https://github.com/MILKYWAY-COOP/supreme-bassoon'
          target='_blank'
          rel='noreferrer'
        >
          <FaGithub />
        </a>
      </div>
    </StyledJob>
  );
};

export const Weather = () => {
  return (
    <StyledJob>
      <div className='title'>
        <h1>Digikids</h1>
      </div>

      <div className='description'>
        <p>
          This is Digikids main website. The website is built and managed on
          WordPress.
        </p>
      </div>

      <div className='links'>
        <a
          href='https://digikids.co.ke/'
          target='_blank'
          rel='noopener noreferrer'
        >
          <FaEye />
        </a>
      </div>
    </StyledJob>
  );
};

export const Chat = () => {
  return (
    <StyledJob>
      <div className='title'>
        <h1>Chat App</h1>
      </div>

      <div className='description'>
        <p>
          An online Chat App built on React js and Typescript. Chat App uses the
          Firebase Realtime Database to store messages. <br />
          The app has a like system and a simple account system. <br />
          <br />
          <br />
        </p>
      </div>

      <div className='links'>
        <a href='https://steved.web.app/' target='_blank' rel='noreferrer'>
          <FaEye />
        </a>
        <a
          href='https://github.com/steeeved/friendly-invention'
          target='_blank'
          rel='noopener noreferrer'
        >
          <FaGithub />
        </a>
      </div>
    </StyledJob>
  );
};

export const Movies = () => {
  return (
    <StyledJob>
      <div className='title'>
        <h1>Get Movies by City</h1>
      </div>

      <div className='description'>
        <p>
          Give me a city name and I will reply with a list of movies that were
          produced there.
          <br />
          <br />
          <br />
          <br />
        </p>
      </div>

      <div className='links'>
        <a
          href='https://milkywaymovies.web.app/'
          target='_blank'
          rel='noreferrer'
        >
          <FaEye />
        </a>
        <a
          href='https://github.com/MILKYWAY-COOP/psychic-broccoli'
          target='_blank'
          rel='noopener noreferrer'
        >
          <FaGithub />
        </a>
      </div>
    </StyledJob>
  );
};

export const Koimbi = () => {
  return (
    <StyledJob>
      <div className='title'>
        <h1>Koimbi Children's</h1>
      </div>

      <div className='description'>
        <p>
          This is Koimbi Children's main website. The website is built with react and typescript.
          <br />
          <br />
          <br />
          <br />
        </p>
      </div>

      <div className='links'>
        <a href='https://koimbi.web.app/' target='_blank' rel='noreferrer'>
          <FaEye />
        </a>
        <a
          href='https://github.com/MILKYWAY-COOP/legendary-doodle'
          target='_blank'
          rel='noopener noreferrer'
        >
          <FaGithub />
        </a>
      </div>
    </StyledJob>
  );
};
