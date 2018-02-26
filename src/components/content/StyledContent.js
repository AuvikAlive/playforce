import Styled from 'styled-components'
import Grid from 'material-ui/Grid'

export const StyledContent = Styled(Grid)`
  flex-grow: 1;
  padding: 24px;
  position: relative;
  top: 54px;
  height: calc(100vh - 54*2px);

  @media (min-width: 600px) {
    top: 64px;
    height: calc(100vh - 64*2px);
  }
`
