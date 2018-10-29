import Styled from 'styled-components'
import { toolBarHeight } from '../../constants/'

export const StyledFooter = Styled.footer`
  background-color: rgba(51, 51, 51, 0.08);
  flex: 0 0 auto;
  /* position: relative;
  top: 54px; */

  .toolbar {
    justify-content: space-between;
    min-height: ${toolBarHeight}px;
  }

  span {
    flex-grow: 1;
  }
`
