import Styled from 'styled-components'

export const StyledSignUp = Styled.div`
  width: 90vw;
  height: 80vh;

  form {
    padding: 15%;
  }

  img {
    position: relative;
    left: 50%;
    transform: translateX(-50%);
    margin-bottom: 48px;
  }

  h1 {
    margin-bottom: 24px;
  }

  button {
    margin-top: 48px;
    margin-bottom: 8px;
    width: 100%;
  }

  p {
    margin-top: 16px;
    margin-bottom: 8px;
    color: gray;
  }

  .error {
    color: ${({ theme }) => theme.palette.error.main};
  }

  /* .container {
    height: 100%;
  }

  .left {
    background: gray;
    height: 100%;
  } */
`
