import Styled from 'styled-components'
import { Content } from '../../../components/content/Content'
import {
  addIcon,
  pulseEffect,
  cardMedia,
  listItemSelected,
} from '../../../styledMixins/'

export const StyledSiteList = Styled(Content)`
  ${addIcon};
  ${pulseEffect};
  ${cardMedia};
  ${listItemSelected};

  &.full-width {
    max-width: 100%;
  }
`
