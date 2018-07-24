import Styled from 'styled-components'
import { Content } from '../../../components/content/Content'
import {
  cardMedia,
  datePicker,
  floatingCardIcon,
  withButton,
} from '../../../styledMixins/'

export const StyledCoverForm = Styled(Content)`
  ${cardMedia};
  ${datePicker};
  ${floatingCardIcon};
  ${withButton};
`
