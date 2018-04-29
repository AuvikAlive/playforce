import Styled from 'styled-components'
import { setContentAreaHeight } from '../../styledMixins/setContentAreaHeight'

export const StyledMainContent = Styled.div`
  position: relative;
  ${setContentAreaHeight};
  top: 56px;
`
