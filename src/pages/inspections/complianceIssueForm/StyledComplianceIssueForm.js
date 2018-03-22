import Styled from 'styled-components'
import { Content } from '../../../components/content/Content'
import { cardMedia } from '../../../styledMixins/cardMedia'
import { riskAssessment } from '../../../styledMixins/riskAssessment'

export const StyledComplianceIssueForm = Styled(Content)`
  ${cardMedia};
  ${riskAssessment};
`
