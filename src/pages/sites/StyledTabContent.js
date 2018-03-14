import Styled from 'styled-components'
import { Content } from '../../components/content/Content'

import { errorLoadingSubmit } from '../../styledMixins/errorLoadingSubmit'

export const StyledTabContent = Styled(Content)`
  
  min-height: calc(100vh - 56*2px - 48px);

  /* @media (min-width: 600px) {
    min-height: calc(100vh - 64*2px - 48px);
  } */

  > * {
    width: 100%;
  }

  ${errorLoadingSubmit};
`
