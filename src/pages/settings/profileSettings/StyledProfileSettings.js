import Styled from 'styled-components'
import { Content } from '../../../components/content/Content'
import { errorLoadingSubmit } from '../../../styledMixins/errorLoadingSubmit'

export const StyledProfileSettings = Styled(Content)`
  .card-media {
    height: 100vw;
  }

  ${errorLoadingSubmit};

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
      height: 300px;
    }
  }

  /* .submit-button {
    margin: 0;
  } */
`
