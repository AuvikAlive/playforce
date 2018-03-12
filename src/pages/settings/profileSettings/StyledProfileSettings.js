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

  /* .submit-button {
    margin: 0;
  } */
`
