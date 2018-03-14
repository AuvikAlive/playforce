import Styled from 'styled-components'
import { Content } from '../../../components/content/Content'
import { centerContentVertically } from '../../../styledMixins/centerContentVertically'
import { errorLoadingSubmit } from '../../../styledMixins/errorLoadingSubmit'

export const StyledAddCompliaceIssue = Styled(Content)`
  ${centerContentVertically};
  > * {
    width: 100%;
  }

  ${errorLoadingSubmit};

  .card-media {
    height: 100vw;
  }

  .risk-assessment {
    margin-top: 16px;
    margin-bottom: 8px;
  }
`
