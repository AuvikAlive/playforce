import Styled from 'styled-components'
import { Content } from '../../../../../components/content/Content'

export const StyledGeneralTab = Styled(Content)`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: calc(100vh - 56*2px - 48px);

  @media (min-width: 600px) {
    min-height: calc(100vh - 64*2px - 48px);
  }

  .card {
    width: 100%;
    position: relative;
  }
`
