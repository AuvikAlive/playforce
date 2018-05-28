import Styled from 'styled-components'
import { Content } from '../../components/content/Content'

export const StyledResetPassword = Styled(Content)`
  .success {
    margin-top: 16px;
    margin-bottom: 8px;
    color: ${({ theme }) => theme.palette.success};
  }
`
