import Styled from 'styled-components'
import { Content } from '../../../components/content/Content'
import { cardMedia, datePicker, withButton } from '../../../styledMixins/'

export const StyledConditionRatingForm = Styled(Content)`
  ${cardMedia};
  ${datePicker};
  ${withButton};
`
