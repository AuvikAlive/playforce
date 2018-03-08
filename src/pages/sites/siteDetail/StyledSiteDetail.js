import Styled from 'styled-components'
import { StyledTabContent } from '../StyledTabContent'

export const StyledSiteDetail = Styled(StyledTabContent)`
  .card {
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
