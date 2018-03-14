import Styled from 'styled-components'
import { Content } from '../../../components/content/Content'

import { errorLoadingSubmit } from '../../../styledMixins/errorLoadingSubmit'

export const StyledAddConditionRating = Styled(Content)`
  
  > * {
    width: 100%;
  }

  ${errorLoadingSubmit};

  .card-media {
    height: 100vw;
  }
`
