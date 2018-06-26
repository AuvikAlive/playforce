import Styled from 'styled-components'
import { Content } from '../../../components/content/Content'
import { addIcon, pulseEffect, cardMedia } from '../../../styledMixins/'

export const StyledSiteList = Styled(Content)`
  ${addIcon};
  ${pulseEffect};
  ${cardMedia};

  &.full-width {
    max-width: 100%;
  }
`
