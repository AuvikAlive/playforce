import Styled from 'styled-components'
import { Content } from '../../../components/content/Content'
import { cardMedia } from '../../../styledMixins/cardMedia'
import { datePicker } from '../../../styledMixins/datePicker'

export const StyledCover = Styled(Content)`
  ${cardMedia};
  ${datePicker};
`
