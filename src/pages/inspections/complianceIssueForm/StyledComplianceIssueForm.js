import Styled from 'styled-components'
import { Content } from '../../../components/content/Content'
import { cardMediaPortrait } from '../../../styledMixins/cardMediaPortrait'
import { riskAssessment } from '../../../styledMixins/riskAssessment'

export const StyledComplianceIssueForm = Styled(Content)`
  ${cardMediaPortrait};
  ${riskAssessment};
`
