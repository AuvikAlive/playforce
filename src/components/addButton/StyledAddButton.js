import Styled from 'styled-components'
import { pulseEffect } from '../../styledMixins/'

export const StyledAddButton = Styled.div`
  position: fixed;
  left: calc(100% - 32px - 56px);
  bottom: calc(54px/2);
  z-index: 100;

  ${pulseEffect};
`
