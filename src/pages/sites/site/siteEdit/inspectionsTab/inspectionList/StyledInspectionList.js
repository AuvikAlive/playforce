import Styled from 'styled-components'
import { Content } from '../../../../../../components/content/Content'

export const StyledInspectionList = Styled(Content)`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: calc(100vh - 56*2px - 48px);

  @media (min-width: 600px) {
    min-height: calc(100vh - 64*2px - 48px);
  }

  .paper {
    width: 100%;
    position: relative;
  }

  .add-icon {
    position: fixed;
    right: 24px;
    bottom: calc(54px/2);
    z-index: 100;

    @media (min-width: 600px) {
      bottom: calc(64px/2);
    }
  }
`
