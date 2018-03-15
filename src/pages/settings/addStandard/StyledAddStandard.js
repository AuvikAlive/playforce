import Styled from 'styled-components'
import { Content } from '../../../components/content/Content'
import { errorLoadingSubmit } from '../../../styledMixins/errorLoadingSubmit'

export const StyledAddStandard = Styled(Content)`
  ${errorLoadingSubmit};

  .publish-date {
    margin-top: 16px;
    margin-bottom: 8px;
  }
`
