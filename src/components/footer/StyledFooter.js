import Styled from 'styled-components'

export const StyledFooter = Styled.footer`
  background-color: rgba(51, 51, 51, 0.08);
  position: relative;
  top: 54px;

  /* @media (min-width: 600px) {
    top: 64px;
  } */

  .toolbar {
    justify-content: space-between;
    min-height: 56px;
  }

  span {
    flex-grow: 1;
  }
`
