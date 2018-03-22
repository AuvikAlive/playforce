import Styled from 'styled-components'
import { Content } from '../../../components/content/Content'
import { cardMedia } from '../../../styledMixins/cardMedia'
import { datePicker } from '../../../styledMixins/datePicker'

export const StyledConditionRatingForm = Styled(Content)`
  ${cardMedia};
  ${datePicker};
`
