import styled from 'styled-components';

const AppStyles = styled.div`
  height: 100vh;
  width: 100vw;
  display: grid;
  grid-template-rows: 15% 60% 20%;
  
  font-family: 'Syne Mono', monospace;
  font-size: 1.15em;
  color: ${(props: any) => props.theme.mainTextColor};
  
  @media (max-width: 768px) {
    min-width: 100vw;
    height: auto;
    display: flex;
    flex-direction: column;
    padding-bottom: 0px;
  }

`;

export default AppStyles;
