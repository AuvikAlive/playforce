import Styled from 'styled-components'
import { Content } from '../../../../../../components/content/Content'
import { centerTabContentVertically } from '../../centerTabContentVertically'

export const StyledInspectionList = Styled(Content)`
  ${centerTabContentVertically};

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
