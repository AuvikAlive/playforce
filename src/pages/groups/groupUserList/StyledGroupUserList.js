import Styled from 'styled-components'
import { Content } from '../../../components/content/Content'
import { addIcon, pulseEffect, listItemSelected } from '../../../styledMixins/'

export const StyledGroupUserList = Styled(Content)`
  ${addIcon};
  ${pulseEffect};
  ${listItemSelected};
`
