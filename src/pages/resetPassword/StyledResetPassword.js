import Styled from 'styled-components'
import { Content } from '../../components/content/Content'
import { centerContentVertically } from '../../styledMixins/centerContentVertically'
import { errorLoadingSubmit } from '../../styledMixins/errorLoadingSubmit'

export const StyledResetPassword = Styled(Content)`
  ${centerContentVertically};
  
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
