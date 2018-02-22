import Styled from 'styled-components'

export const StyledForm = Styled.div`
  height: calc(100vh - 64px);

  form {
    padding: 72px 24px;
    position: relative;
    top: 50%;
    transform: translateY(-50%);
  }

  /* img {
    position: relative;
    width: 100%;
    left: 50%;
    transform: translateX(-50%);
    margin-bottom: 48px;
  } */

  .checkbox {
    margin-top: 16px;
  }

  button {
    margin-top: 24px;
    margin-bottom: 8px;
    width: 100%;
  }

  p {
    margin-top: 16px;
    margin-bottom: 8px;
    color: gray;
  }
`
