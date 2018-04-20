import Styled from 'styled-components'

export const StyledNavBar = Styled.div`
  flex-grow: 1;

  .disable-shadow {
    box-shadow: none;
  }

  .toolbar {
    justify-content: space-between;
    min-height: 56px;
  }

  .page-title {
    flex-grow: 1;
    padding-left: 16px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;

    @media (min-width: 600px) {
      /* top: 64px; */
      padding-left: 24px;
    }
  }

  .sign-in {
    margin-right: 8px;
  }
`
