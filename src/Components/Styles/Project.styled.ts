import styled from 'styled-components';

export const StyledProject = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1.5em 2.5rem;
  gap: 1rem;
  background: ${(props: any) => props.theme.secondaryColor};

  @keyframes flip-animation {
    0% {
      transform: rotateY(0deg);
    }
    100% {
      transform: rotateY(180deg);
    }
  }

  .flip {
    transform: rotateY(180deg);
    transform-style: preserve-3d;
  }

  .leftDiv {
    height: 100%;
    width: 100%;
    position: relative;
    padding: 20px;
    gap: 0.5rem;
    top: 0;
    left: 0;
    transition: all 0.8s ease;

    .rotate180 {
      transform: rotateY(180deg);
    }

    .card {
      height: 100%;
      width: 100%;
      position: absolute;
      top: 0;
      left: 0;
      background: ${(props: any) => props.theme.secondaryColor};
      box-shadow: rgba(0, 0, 0, 0.55) 0px 2px 5px -1px,
        rgba(0, 0, 0, 0.5) 0px 1px 3px -1px;
    }
  }

  .rightDiv {
    height: 100%;
    width: 100%;
    position: relative;
    display: flex;
    flex-direction: column;

    box-shadow: rgba(0, 0, 0, 0.55) 0px 2px 5px -1px,
      rgba(0, 0, 0, 0.5) 0px 1px 3px -1px;

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
      justify-content: space-between;

      .top {
        display: flex;
        justify-content: space-around;
        padding: 1rem;
        gap: 0.5em;

        .bottomRight,
        .bottomLeft {
          ul {
            display: flex;
            flex-direction: column;
            padding-left: 1.5em;
            gap: 0.5rem;
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

        @media (max-width: 768px) {
          grid-template-columns: 1fr;

          .bottomRight,
          .bottomLeft {
            ul {
              padding-left: 5px;
              li {
                font-size: 1rem;
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

  @media (max-width: 768px) {
    min-height: 700px;
    display: grid;
    grid-template-rows: 50% 50%;
    padding: 0.7em 0.7rem;

    .leftDiv,
    .rightDiv {
      width: 100%;
      min-height: 50%;
      flex: 1;
    }

    .rightDiv {
      gap: 20px;
    }
  }
`;
