import Styled from 'styled-components'
import { Content } from '../../../components/content/Content'

export const StyledAuditSummary = Styled(Content)`

  .signature-label {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
  }

  .signature {
    @media (max-width: 600px) {
      padding-top: 32px;
    }
    width: auto;
    height: 50vw;

    @media screen and (orientation: landscape) {
      height: calc(${({ theme }) => theme.lanscapeWidth} / 2);
    }
  }
`
