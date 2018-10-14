import Styled from 'styled-components'
import { toolBarHeight } from '../../constants/'
import { truncate } from '../../styledMixins/'

export const StyledNavBar = Styled.div`
  flex: 0 0 auto;

  .disable-shadow {
    box-shadow: none;
  }

  .toolbar {
    justify-content: space-between;
    flex-wrap: nowrap;
    min-height: ${toolBarHeight}px;
  }

  .page-title {
    flex-grow: 1;
    padding-left: 16px;
    ${truncate};

    @media (min-width: 600px) {
      /* top: 64px; */
      padding-left: 24px;
    }
  }

  .right-component {
    > div {
      display: flex;
      justify-content: flex-end;
      flex-wrap: nowrap;
    }
  }

  .sign-in {
    margin-right: 8px;
  }
`
