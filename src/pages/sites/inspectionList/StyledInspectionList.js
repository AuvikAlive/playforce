import Styled from 'styled-components'
import { StyledTabContent } from '../StyledTabContent'

export const StyledInspectionList = Styled(StyledTabContent)`
  .add-icon {
    position: fixed;
    left: calc(100% - 24px - 56px);
    bottom: calc(54px/2);
    z-index: 100;

    @media (min-width: 600px) {
      bottom: calc(64px/2);
    }
  }
`
