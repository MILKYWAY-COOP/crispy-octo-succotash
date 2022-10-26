import styled from 'styled-components';

export const StyledProject = styled.div`
  display: grid;
  height: 100%;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  padding: 1.5em 2.5rem;
  gap: 5rem;
  background: ${(props: any) => props.theme.secondaryColor};

  @keyframes slideInFromLeft {
    0% {
      transform: translateX(-100%);
    }
    100% {
      transform: translateX(0);
    }
  }

  @keyframes slideInFromRight {
    0% {
      transform: translateX(100%);
    }
    100% {
      transform: translateX(0);
    }
  }

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    width: 100vw;
    gap: 3rem;
    padding: 0.7em 0.7rem;
  }

  .leftDiv {
    animation: slideInFromLeft 0.5s ease-in-out;
    height: 100%;
    width: 100%;
    padding: 2rem;
    display: grid;
    grid-template-rows: 40% 60%;
    background: ${(props: any) => props.theme.secondaryColor};
    gap: 0.5rem;
    padding: 1rem;
    box-shadow: rgba(0, 0, 0, 0.55) 0px 2px 5px -1px,
      rgba(0, 0, 0, 0.5) 0px 1px 3px -1px;

    & > * {
      animation: slideInFromLeft 0.5s ease-in-out;
    }
  }

  .rightDiv {
    display: grid;
    grid-template-rows: 20% 80%;
    height: 100%;
    width: 100%;
    box-shadow: rgba(0, 0, 0, 0.55) 0px 2px 5px -1px,
      rgba(0, 0, 0, 0.5) 0px 1px 3px -1px;
    animation: slideInFromRight 0.5s ease-in-out;

    h1 {
      font-family: 'Nunito', sans-serif;
      font-size: 3rem;
      text-align: center;
      padding: 0 1rem;
      color: ${(props: any) => props.theme.mainTextColor};
      border-bottom: 2px solid ${(props: any) => props.theme.mainTextColor};
    }

    .main {
      display: flex;
      flex-direction: column;

      .top {
        display: grid;
        grid-template-columns: 1fr 1fr;
        padding: 1rem;
        gap: 0.5em;

        .bottomRight,
        .bottomLeft {
          ul {
            display: flex;
            flex-direction: column;
            padding-left: 1.5em;
            gap: 1rem;
            height: 100%;

            li {
              list-style: none;
              font-size: 1.2rem;
              text-align: start;
              font-family: 'Nunito', sans-serif;
              display: flex;
              align-items: center;
              justify-content: flex-start;
              color: ${(props: any) => props.theme.mainTextColor};
              width: auto;

              span {
                transition: all 0.3s ease-in-out;
                cursor: pointer;

                &:hover {
                  transform: scale(1.1);
                }
              }

              span::after {
                content: '';
                width: 0%;
                height: 2px;
                background: ${(props: any) => props.theme.mainTextColor};
                display: block;
                margin: auto;
                transition: 0.5s;
              }

              span:hover::after {
                width: 100%;
              }
            }
          }
        }
      }

      .bottom {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        padding-bottom: 10px;

        .btnDiv {
          display: flex;
          justify-content: center;
          align-items: center;
          flex-direction: column;
          position: relative;
          z-index: 2;

          &:hover .floater {
            opacity: 1;
            pointer-events: auto;
            top: -30px;
          }

          .floater {
            width: 8rem;
            position: absolute;
            top: 0px;
            background: ${(props: any) => props.theme.mainTextColor};
            color: ${(props: any) => props.theme.mainColor};
            padding: 5px 8px;
            border-radius: 25px;
            box-shadow: 0 10px 10px rgba(0, 0, 0, 0.3);
            opacity: 0;
            pointer-events: none;
            transition: all 0.4s cubic-bezier(0.68, -0.55, 0.265, 1.55);

            &::before {
              position: absolute;
              content: '';
              height: 15px;
              width: 15px;
              background: ${(props: any) => props.theme.mainTextColor};
              bottom: -8px;
              left: 50%;
              transform: translateX(-50%) rotate(45deg);
            }
          }

          .btn {
            margin-top: 1em;
            width: 20px;
            height: 20px;
            color: ${(props: any) => props.theme.mainTextColor};
            transition: all 0.3s ease-in-out;

            @media (max-width: 768px) {
              width: 25px;
              height: 25px;
            }
          }

          @media (max-width: 768px) {
            gap: 0;
          }
        }
      }
    }
  }
`;
