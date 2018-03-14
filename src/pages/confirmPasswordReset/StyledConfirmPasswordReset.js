import Styled from 'styled-components'
import { Content } from '../../components/content/Content'

import { errorLoadingSubmit } from '../../styledMixins/errorLoadingSubmit'

export const StyledConfirmPasswordReset = Styled(Content)`
  
  
  > * {
    width: 100%;
  }

  ${errorLoadingSubmit};

  .success {
    margin-top: 16px;
    margin-bottom: 8px;
    color: ${({ theme }) => theme.palette.success};
  }
`
