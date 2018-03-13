import Styled from 'styled-components'
import { Content } from '../../../components/content/Content'
import { centerContentVertically } from '../../../styledMixins/centerContentVertically'
import { errorLoadingSubmit } from '../../../styledMixins/errorLoadingSubmit'

export const StyledComplianceIssuesList = Styled(Content)`
  ${centerContentVertically};
  > * {
    width: 100%;
  }

  ${errorLoadingSubmit};

  .add-icon {
    position: fixed;
    left: calc(100% - 24px - 56px);
    bottom: calc(54px/2);
    z-index: 100;
  }
`
