import Styled from 'styled-components'

export const StyledSiteEdit = Styled.div`
  .my-root {
    background: ${({ theme }) => theme.palette.primary.main};
  }

  .tab-title {
    color: white;
  }
`
