import Styled from 'styled-components'
import { Content } from '../../../components/content/Content'
import { addIcon, pulseEffect } from '../../../styledMixins/'

export const StyledGroupList = Styled(Content)`
  ${addIcon};
  ${pulseEffect};
`
