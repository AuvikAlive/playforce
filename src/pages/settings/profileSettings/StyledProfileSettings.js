import Styled from 'styled-components'
import { Content } from '../../../components/content/Content'
import { cardMedia } from '../../../styledMixins/cardMedia'

export const StyledProfileSettings = Styled(Content)`
  ${cardMedia};

  .loading {
    padding-bottom: 16px;
  }

  .signature-label {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
  }

  .m-signature-pad {
    width: 100%;

    canvas {
      margin-top: 64px;
      width: 100%;
      height: 50vw;

      @media screen and (orientation: landscape) {
        height: 25vw;
      }
    }
  }
`
