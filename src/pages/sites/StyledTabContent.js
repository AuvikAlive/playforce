import Styled from 'styled-components'
import { Content } from '../../components/content/Content'
import { centerContentVertically } from '../../styledMixins/centerContentVertically'
import { errorLoadingSubmit } from '../../styledMixins/errorLoadingSubmit'

export const StyledTabContent = Styled(Content)`
  ${centerContentVertically};
  min-height: calc(100vh - 56*2px - 48px);

  @media (min-width: 600px) {
    min-height: calc(100vh - 64*2px - 48px);
  }

  > * {
    width: 100%;
  }

  ${errorLoadingSubmit};
`
