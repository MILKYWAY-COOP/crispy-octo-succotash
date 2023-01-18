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
          I am a web developer who is passionate about designing visually
          appealing web applications. My daily tasks include working with
          React.js, TypeScript, GitHub, Google Cloud, and reviewing the code and
          features of other developers. I am seeking a full-time position as a
          Front-End Web Developer.
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
          A pig management system built using React.js and TypeScript with a
          Firebase backend. This system is used to manage records for a piggery
          farm. The system includes basic CRUD (Create, Read, Update, Delete)
          operations for each list in the database. It also includes a list of
          pig breeds and their details.
        </p>
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
          Obtain accurate analysis of the 2022 Kenyan General Elections with
          this web application built using React.js and TypeScript, and powered
          by a Firebase backend.
        </p>
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
          This is the official website of Digikids. Built and managed on
          WordPress, it provides all necessary information about the
          organization.
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
        <h1>Children's Home</h1>
      </div>

      <div className='description'>
        <p>
          This is the official website for Koimbi Children's Home. The website
          has been expertly built using the modern technologies React and
          TypeScript, providing an interactive and user-friendly experience for
          visitors.
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

export const SmartLife = () => {
  return (
    <StyledJob>
      <div className='title'>
        <h1>Smart Life</h1>
      </div>

      <div className='description'>
        <p>
          An online shop that sells smart products, ships to all major cities and
          towns in East Africa and for domestic orders (within Kenya), the expected
          delivery time is 5-8 business days from the date of shipment.
        </p>
      </div>

      <div className='links'>
        <a href='https://smartlife.co.ke/' target='_blank' rel='noreferrer'>
          <FaEye />
        </a>
        <a
          href='https://github.com/castynet-studios/smart-life'
          target='_blank'
          rel='noopener noreferrer'
        >
          <FaGithub />
        </a>
      </div>
    </StyledJob>
  );
};
