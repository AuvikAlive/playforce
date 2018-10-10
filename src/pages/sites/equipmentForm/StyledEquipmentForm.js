import Styled from 'styled-components'
import { Content } from '../../../components/content/Content'
import { cardMedia, floatingCardIcon, withButton } from '../../../styledMixins/'

export const StyledEquipmentForm = Styled(Content)`
  ${cardMedia};
  ${floatingCardIcon};
  ${withButton};
`
