import Styled from 'styled-components'
import { Content } from '../../components/content/Content'
import { addIcon, pulseEffect, cardMedia } from '../../styledMixins/'

export const StyledGridList = Styled(Content)`
  ${addIcon};
  ${pulseEffect};
  ${cardMedia};

  .card-content {
    position: relative;

    .edit-icon {
      position: absolute;
      right: 8px;
      top: -4px;
      transform: translateY(-50%);
    }
  }
`
