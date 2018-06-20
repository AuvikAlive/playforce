import Styled from 'styled-components'
import { StyledTabContent } from '../StyledTabContent'
import { cardMedia, withButton } from '../../../styledMixins/'

export const StyledEquipmentForm = Styled(StyledTabContent)`
  ${cardMedia};
  ${withButton};
`
