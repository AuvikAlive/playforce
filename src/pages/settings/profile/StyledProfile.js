import Styled from 'styled-components'
import { Content } from '../../../components/content/Content'
import { cardMedia } from '../../../styledMixins/cardMedia'

export const StyledProfile = Styled(Content)`
  ${cardMedia};

  .loading {
    padding-bottom: 16px;
  }
`
