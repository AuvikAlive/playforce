import Styled from 'styled-components'
import { StyledGridList } from '../StyledGridList'

export const StyledComplianceIssuesList = Styled(StyledGridList)`
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
