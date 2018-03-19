import Styled from 'styled-components'
import { Content } from '../../../components/content/Content'
import { errorLoadingSubmit } from '../../../styledMixins/errorLoadingSubmit'

export const StyledEditCompliaceIssue = Styled(Content)`
  ${errorLoadingSubmit};

  .card-media {
    height: 100vw;
  }

  .risk-assessment {
    margin-top: 32px;
    display: inline-block;
  }
`
