import styled from 'styled-components';

export const ThemeStyled = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;

  .active {
    transition: 0.3s ease-in-out;
    transform: scale(1.3);
  }

  #light,
  #blue,
  #purple,
  #green {
    height: 2em;
    width: 2em;
    border-radius: 50%;
    border: 2px solid black;

    &:hover {
      transition: 0.3s ease;
      cursor: pointer;
      transform: scale(0.9);
    }

    @media (max-width: 768px) {
        height: 2.5em;
        width: 2.5em;
    }
  }

  #light {
    background-color: #eaeaea;
  }

  #blue {
    background-color: #152028;
  }

  #purple {
    background-color: #463445;
  }

  #green {
    background-color: #606856;
  }

`;