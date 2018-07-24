import Styled from 'styled-components'
import { Content } from '../../components/content/Content'
import {
  addIcon,
  pulseEffect,
  cardMedia,
  floatingCardIcon,
} from '../../styledMixins/'

export const StyledGridList = Styled(Content)`
  ${addIcon};
  ${pulseEffect};
  ${cardMedia};
  ${floatingCardIcon};
`
