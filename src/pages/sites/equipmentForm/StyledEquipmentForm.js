import Styled from 'styled-components'
import { StyledTabContent } from '../StyledTabContent'
import { cardMedia, floatingCardIcon, withButton } from '../../../styledMixins/'

export const StyledEquipmentForm = Styled(StyledTabContent)`
  ${cardMedia};
  ${floatingCardIcon};
  ${withButton};
`
