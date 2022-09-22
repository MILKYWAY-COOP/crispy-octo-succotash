import styled from 'styled-components';

const AppStyles = styled.div`
  background: ${(props: any) => props.theme.mainColor};
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: cover;
  color: hsl(192, 100%, 9%);
  font-family: 'Syne Mono', monospace;
  font-size: 1.15em;
  margin: 0;
  transition: all 0.3s ease;
`;

export default AppStyles;