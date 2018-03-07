import Styled from 'styled-components'
import { setContentAreaHeight } from '../../styledMixins/setContentAreaHeight'

export const StyledMainContent = Styled.div`
  position: relative;
  ${setContentAreaHeight};
  top: 56px;

  @media (min-width: 600px) {
    top: 64px;
  }
`
