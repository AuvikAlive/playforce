import Styled from 'styled-components'
import { Content } from '../../../components/content/Content'
import { errorLoadingSubmit } from '../../../styledMixins/errorLoadingSubmit'

export const StyledAddCommonIssue = Styled(Content)`
  ${errorLoadingSubmit};

  .risk-assessment {
    margin-top: 16px;
    margin-bottom: 8px;
  }
`
