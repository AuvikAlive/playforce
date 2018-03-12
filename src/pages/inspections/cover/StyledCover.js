import Styled from 'styled-components'
import { Content } from '../../../components/content/Content'
import { centerContentVertically } from '../../../styledMixins/centerContentVertically'
import { errorLoadingSubmit } from '../../../styledMixins/errorLoadingSubmit'

export const StyledCover = Styled(Content)`
  ${centerContentVertically};
  > * {
    width: 100%;
  }

  .card-media {
    height: 100vw;
  }

  ${errorLoadingSubmit};

  .inspection-date {
    margin-top: 16px;
    margin-bottom: 8px;
  }
`
