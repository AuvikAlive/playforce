import Styled from 'styled-components'
import { Content } from '../../../components/content/Content'
import { centerContentVertically } from '../../../styledMixins/centerContentVertically'
import { errorLoadingSubmit } from '../../../styledMixins/errorLoadingSubmit'

export const StyledAuditSummary = Styled(Content)`
  ${centerContentVertically};
  > * {
    width: 100%;
  }

  ${errorLoadingSubmit};

  .m-signature-pad {
    width: 100%;

    canvas {
      padding-top: 32px;
      width: 100%;
      height: 300px;
    }
  }
`
