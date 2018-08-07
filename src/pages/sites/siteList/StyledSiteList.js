import Styled from 'styled-components'
import { Content } from '../../../components/content/Content'
import { cardMedia } from '../../../styledMixins/'

export const StyledSiteList = Styled(Content)`
  ${cardMedia};

  &.full-width {
    max-width: 100%;
  }
`
