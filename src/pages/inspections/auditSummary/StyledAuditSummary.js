import Styled from 'styled-components'
import { Content } from '../../../components/content/Content'

import { errorLoadingSubmit } from '../../../styledMixins/errorLoadingSubmit'

export const StyledAuditSummary = Styled(Content)`
  
  > * {
    width: 100%;
  }

  ${errorLoadingSubmit};

  .signature-label {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
  }

  .m-signature-pad {
    width: 100%;

    canvas {
      margin-top: 64px;
      width: 100%;
    }
  }
`
