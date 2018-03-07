import Styled from 'styled-components'
import { Content } from '../../components/content/Content'
import { centerContentVertically } from '../../styledMixins/centerContentVertically';

export const StyledSettings = Styled(Content)`
  ${centerContentVertically};

  > * {
    width: 100%;
  }
`
