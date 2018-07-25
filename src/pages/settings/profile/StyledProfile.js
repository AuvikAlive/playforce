import Styled from 'styled-components'
import { Content } from '../../../components/content/Content'
import { cardMedia, floatingCardIcon } from '../../../styledMixins/'

export const StyledProfile = Styled(Content)`
  ${cardMedia};
  ${floatingCardIcon};

  .loading {
    padding-bottom: 16px;
  }
`
