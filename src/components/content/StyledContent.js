import Styled from 'styled-components'

export const StyledContent = Styled.div`
  flex-grow: 1;
  padding: 24px;
  position: relative;
  top: 56px;
  height: calc(100vh - 56*2px);

  @media (min-width: 600px) {
    top: 64px;
    height: calc(100vh - 64*2px);
  }
`
