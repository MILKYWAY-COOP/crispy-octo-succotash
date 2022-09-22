import styled from 'styled-components';

export const FooterStyled = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background: ${(props: any) => props.theme.secondaryColor};

  .icons {
    * {
      margin: 0 10px;
      width: 40px;
      height: 40px;
      color: ${(props: any) => props.theme.mainTextColor};
    }
  }

  .rights {
    margin-top: 5px;

    p {
      font-size: 20px;
      color: ${(props: any) => props.theme.mainTextColor};
      a {
        text-decoration: underline;
        color: ${(props: any) => props.theme.mainTextColor};
      }
    }
  }
`;
