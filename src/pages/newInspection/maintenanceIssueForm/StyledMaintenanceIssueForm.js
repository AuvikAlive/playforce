import Styled from 'styled-components'
import { Content } from '../../../components/content/Content'
import { cardMediaPortrait } from '../../../styledMixins/cardMediaPortrait'

export const StyledMaintenanceIssueForm = Styled(Content)`
  ${cardMediaPortrait};

  .submit-button {
    margin-top: 32px;
  }

  .card-content {
    position: relative;

    .edit-icon {
      position: absolute;
      right: 16px;
      top: -4px;
      transform: translateY(-50%);
    }
  }
`
