import styled from 'styled-components';

const StyledJob = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  transition: all 0.3s ease-in-out;
  

  .title {
    padding: 1rem;

    h1 {
      font-family: 'Nunito', sans-serif;
      font-size: 3rem;
      text-align: center;
      padding: 0 1rem;
      color: ${(props: any) => props.theme.mainTextColor};

      @media (max-width: 768px) {
        font-size: 2rem;
      }
    }
  }

  .description {
    p {
      font-family: 'Nunito', sans-serif;
      font-size: 16px;
      text-align: left;
      padding: 0 1rem;
      color: ${(props: any) => props.theme.mainTextColor};
    }
  }

  .links {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    padding: 5px;

    a > * {
      margin: 1rem;
      height: 40px;
      width: auto;
      color: ${(props: any) => props.theme.mainTextColor};
      cursor: pointer;
    }
  }
`;	

export default StyledJob;