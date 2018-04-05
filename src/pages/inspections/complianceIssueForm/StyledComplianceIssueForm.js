import Styled from 'styled-components'
import { Content } from '../../../components/content/Content'
import { cardMedia } from '../../../styledMixins/cardMedia'
import { riskAssessment } from '../../../styledMixins/riskAssessment'

export const StyledComplianceIssueForm = Styled(Content)`
  ${cardMedia};
  ${riskAssessment};
  img {
    height: 50vw;
    width: auto;
    position: relative;
    left: 50%;
    transform: translateX(-50%);

     @media (min-width: 600px) {
      height: calc(600 * 16 / 9px);
    }
  }
`
