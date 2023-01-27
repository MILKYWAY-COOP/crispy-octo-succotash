import styled from 'styled-components';

export const FooterStyled = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background: ${(props: any) => props.theme.secondaryColor};

  @media (max-width: 768px) {
    padding: 1rem;
    gap: 1.5rem;
  }

  .theme {
    display: none;

    @media (max-width: 768px) {
      display: flex;
    }
  }

  .icons {
    svg {
      margin: 0 10px;
      width: 40px;
      min-height: 40px;
      fill: ${(props: any) => props.theme.mainTextColor};
    }

    @media (max-width: 768px) {
      align-items: center;
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

      @media (max-width: 768px) {
        text-align: center;
      }
    }
  }
`;
