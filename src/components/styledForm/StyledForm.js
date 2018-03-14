import Styled from 'styled-components'
import { Content } from '../../components/content/Content'

export const StyledForm = Styled(Content)`
  
  
  form {
    padding-bottom: 24px;
  }

  .error {
    color: ${({ theme }) => theme.palette.error.main};
  }

  .loading {
    display: flex;
    justify-content: center;
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
