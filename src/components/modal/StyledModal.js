import Styled from 'styled-components'
import Paper from 'material-ui/Paper'

export const StyledModal = Styled(Paper)`
  position: absolute;
  outline: none;
  top: 50%;
  left: 50%;
  transform: translate3d(-50%, -50%, 0);
  width: 90vw;
  height: 80vh;
`
