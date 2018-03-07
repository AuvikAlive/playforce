import Styled from 'styled-components'
import { Content } from '../../../../components/content/Content'
import { centerContentVertically } from '../../../../styledMixins/centerContentVertically'

export const StyledSiteDetail = Styled(Content)`
  ${centerContentVertically};

  .card {
    width: 100%;
    position: relative;
  }

  .edit-icon {
    position: absolute;
    top: 245px;
    right: 16px;
    z-index: 100;
    transform: translateY(-50%);
  }
`
