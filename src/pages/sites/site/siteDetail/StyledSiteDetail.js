import Styled from 'styled-components'
import { Content } from '../../../../components/content/Content'

export const StyledSiteDetail = Styled(Content)`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: calc(100vh - 56*2px);

  @media (min-width: 600px) {
    min-height: calc(100vh - 64*2px);
  }

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
