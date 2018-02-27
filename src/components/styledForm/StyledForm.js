import Styled from 'styled-components'
import { Content } from '../../components/content/Content'

export const StyledForm = Styled(Content)`

  display: flex;
  justify-content: center;
  align-items: center;
  flex-grow: 1;
  position: relative;
  min-height: calc(100vh - 56*2px);

  @media (min-width: 600px) {
    min-height: calc(100vh - 64*2px);
  }
  /* min-height: ${({ height }) => height + 48 + 'px'}; */
  
  form {
    padding-bottom: 24px;
  }

  .error {
    color: ${({ theme }) => theme.palette.error.main};
  }

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
