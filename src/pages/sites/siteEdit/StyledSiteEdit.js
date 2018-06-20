import Styled from 'styled-components'

export const StyledSiteEdit = Styled.div`

  .my-root {
    background: ${({ theme }) => theme.palette.primary.main};
    position: fixed;
    width: 100%;
    z-index: 100;
  }

  .tab-content {
    position: relative;
    top: 48px;
  }

  .tab-title {
    color: white;
  }
`
