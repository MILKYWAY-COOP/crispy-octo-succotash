import styled from 'styled-components';

export const StyledNav = styled.div`
  width: 100%;
  height: 80px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.5em;
  background: ${(props: any) => props.theme.mainColor};
  position: relative;
  z-index: 10;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 2px 1px,
    rgba(0, 0, 0, 0.13) 0px 0px 2px 1px;

  h1 {
    font-family: 'Delius Unicase', cursive;
    color: ${(props: any) => props.theme.mainTextColor};
    font-size: 1.5em;
    letter-spacing: 2px;
    transition: all 0.3s ease;

    &:hover {
      scale: 1.1;
    }
  }

  .icons {
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
  }

  .handles {
    display: flex;
    align-items: center;
    gap: 1rem;
    padding-right: 1rem;

    a {
      text-decoration: none;
      font-size: 1.5em;
      color: ${(props: any) => props.theme.mainTextColor};

      &:hover {
        transition: 0.3s ease-in-out;
        transform: scale(1.2);
      }
    }
  }
`;
