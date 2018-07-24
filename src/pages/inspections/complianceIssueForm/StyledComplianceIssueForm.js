import Styled from 'styled-components'
import { Content } from '../../../components/content/Content'
import {
  cardMediaPortrait,
  riskAssessment,
  floatingCardIcon,
} from '../../../styledMixins/'

export const StyledComplianceIssueForm = Styled(Content)`
  ${cardMediaPortrait};
  ${riskAssessment};
  ${floatingCardIcon};

  .submit-button {
    margin-top: 32px;
  }
`
