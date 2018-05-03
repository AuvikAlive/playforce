import Styled from 'styled-components'
import { Content } from '../../components/content/Content'
import { withButton } from '../../styledMixins/'

export const StyledSiteForm = Styled(Content)`
  ${withButton};

  .card {
    overflow: visible;
  }
`
