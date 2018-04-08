import Styled from 'styled-components'
import { StyledGridList } from '../StyledGridList'
import { cardMediaPortrait } from '../../../styledMixins/cardMediaPortrait'

export const StyledMaintenanceIssuesList = Styled(StyledGridList)`
  ${cardMediaPortrait};
`
