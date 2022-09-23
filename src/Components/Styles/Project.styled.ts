import styled from 'styled-components';

export const StyledProject = styled.div`
  display: grid;
  height: 100%;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  padding: 1.5em 2.5rem;
  gap: 5rem;
  background: ${(props: any) => props.theme.secondaryColor};

  .leftDiv {
    height: 100%;
    width: 100%;
    padding: 2rem;
    display: grid;
    grid-template-rows: 40% 60%;
    background: ${(props: any) => props.theme.secondaryColor};
    gap: 0.5rem;
    padding: 1rem;
    box-shadow: rgba(0, 0, 0, 0.55) 0px 2px 5px -1px, rgba(0, 0, 0, 0.5) 0px 1px 3px -1px;


    .welcome {
      font-size: 8rem;
      font-weight: 700;
      font-family: 'Akaya Kanadaka', cursive;
      text-transform: uppercase;
      color: ${(props: any) => props.theme.mainTextColor};
      position: relative;

      text-shadow: 0.05em 0 0 rgba(255, 0, 0, 0.75),
        -0.025em -0.05em 0 rgba(0, 255, 0, 0.75),
        0.025em 0.05em 0 rgba(0, 0, 255, 0.75);

      animation: welcome 500ms infinite;
    }

    .welcome span {
      position: absolute;
      top: 0;
      left: 0;
    }

    .welcome span:first-child {
      animation: welcome 650ms infinite;
      clip-path: polygon(0 0, 100% 0, 100% 45%, 0 45%);
      transform: translate(-0.025em, -0.0125em);
      opacity: 0.8;
    }
    .welcome span:last-child {
      animation: welcome 375ms infinite;
      clip-path: polygon(0 80%, 100% 20%, 100% 100%, 0 100%);
      transform: translate(0.0125em, 0.025em);
      opacity: 0.8;
    }

    @keyframes welcome {
      0% {
        text-shadow: 0.05em 0 0 rgba(255, 0, 0, 0.75),
          -0.05em -0.025em 0 rgba(0, 255, 0, 0.75),
          -0.025em 0.05em 0 rgba(0, 0, 255, 0.75);
      }
      14% {
        text-shadow: 0.05em 0 0 rgba(255, 0, 0, 0.75),
          -0.05em -0.025em 0 rgba(0, 255, 0, 0.75),
          -0.025em 0.05em 0 rgba(0, 0, 255, 0.75);
      }
      15% {
        text-shadow: -0.05em -0.025em 0 rgba(255, 0, 0, 0.75),
          0.025em 0.025em 0 rgba(0, 255, 0, 0.75),
          -0.05em -0.05em 0 rgba(0, 0, 255, 0.75);
      }
      49% {
        text-shadow: -0.05em -0.025em 0 rgba(255, 0, 0, 0.75),
          0.025em 0.025em 0 rgba(0, 255, 0, 0.75),
          -0.05em -0.05em 0 rgba(0, 0, 255, 0.75);
      }
      50% {
        text-shadow: 0.025em 0.05em 0 rgba(255, 0, 0, 0.75),
          0.05em 0 0 rgba(0, 255, 0, 0.75), 0 -0.05em 0 rgba(0, 0, 255, 0.75);
      }
      99% {
        text-shadow: 0.025em 0.05em 0 rgba(255, 0, 0, 0.75),
          0.05em 0 0 rgba(0, 255, 0, 0.75), 0 -0.05em 0 rgba(0, 0, 255, 0.75);
      }
      100% {
        text-shadow: -0.025em 0 0 rgba(255, 0, 0, 0.75),
          -0.025em -0.025em 0 rgba(0, 255, 0, 0.75),
          -0.025em -0.05em 0 rgba(0, 0, 255, 0.75);
      }
    }

    @media (prefers-reduced-motion: reduce) {
      *,
      ::before,
      ::after {
        animation-delay: -1ms !important;
        animation-duration: 1ms !important;
        animation-iteration-count: 1 !important;
        background-attachment: initial !important;
        scroll-behavior: auto !important;
        transition-duration: 0s !important;
        transition-delay: 0s !important;
      }
    }

    .leftPara {
      display: flex;
      justify-content: flex-start;
      position: relative;

      p {
        height: 100%;
        margin: 1em;
        height: auto;
        font-size: 16px;
        overflow: hidden;
        color: ${(props: any) => props.theme.mainTextColor};
        line-height: 1.5;
        font-family: 'Nunito', sans-serif;
      }
    }
  }
  .rightDiv {
    display: grid;
    grid-template-rows: 20% 80%;
    height: 100%;
    width: 100%;
    box-shadow: rgba(0, 0, 0, 0.55) 0px 2px 5px -1px, rgba(0, 0, 0, 0.5) 0px 1px 3px -1px;

    h1 {
        font-family: 'Nunito', sans-serif;
        font-size: 3rem;
        text-align: center;
        padding: 0 1rem;
        color: ${(props: any) => props.theme.mainTextColor};
        border-bottom: 2px solid ${(props: any) => props.theme.mainTextColor};
      }
      
      .bottom {
        display: flex;
        flex-direction: column;
        padding: 1rem;
        gap: 0.5em;
       

        ul {
            display: flex;
            flex-direction: column;
            padding-left: 1.5em;
            gap: 1rem;
          
            li {
                list-style: none;
                font-size: 1.5rem;
                text-align: start;
                font-family: 'Nunito', sans-serif;
                transition: all 0.3s ease-in-out;
                display: flex;
                align-items: center;
                justify-content: flex-start;
                color: ${(props: any) => props.theme.mainTextColor};
                width: auto;

                &:hover {
                    transform: scale(1.1);
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
        .btnDiv {
            display: flex;
            justify-content: center;
            align-items: center;
            gap: 1em;
            
            .btn {
                margin-top: 1em;
                width: 20px;
                height: 20px;
                color: ${(props: any) => props.theme.mainTextColor};
                transition: all 0.3s ease-in-out;

                &:hover {
                    transform: scale(1.5);
                }
            }

        }
    }
`;
