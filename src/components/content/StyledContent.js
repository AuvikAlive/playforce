import Styled from 'styled-components'

export const StyledContent = Styled.div`
  padding: 16px;

  @media screen and (orientation: landscape) {
    width: ${({ theme }) => theme.lanscapeWidth};
    margin: 0 auto;
  }
`
