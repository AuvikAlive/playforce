import Styled from 'styled-components'
import { StyledForm } from '../../components/styledForm/StyledForm'

export const StyledSignIn = Styled(StyledForm)`
  .social-button {
    margin-top: 8px;
    position: relative;
    
    img, svg {
      height: 24px;
      position: absolute;
      left: 16px;
    }
  }
`
