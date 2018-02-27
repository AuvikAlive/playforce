import Styled from 'styled-components'

export const StyledMainContent = Styled.div`
  flex-grow: 1;
  position: relative;
  top: 56px;
  min-height: calc(100vh - 56*2px);

  @media (min-width: 600px) {
    top: 64px;
    min-height: calc(100vh - 64*2px);
  }
`
