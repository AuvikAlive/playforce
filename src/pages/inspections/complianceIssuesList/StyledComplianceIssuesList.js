import Styled from 'styled-components'
import { StyledGridList } from '../StyledGridList'
import { cardMediaPortrait } from '../../../styledMixins/cardMediaPortrait'

export const StyledComplianceIssuesList = Styled(StyledGridList)`
  ${cardMediaPortrait};
`
