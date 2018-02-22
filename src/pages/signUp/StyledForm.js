import Styled from 'styled-components'

export const StyledForm = Styled.div`

  height: calc(100vh - 64px);

  form {
    padding: 0 24px;
    position: relative;
    top: 50%;
    transform: translateY(-50%);
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
