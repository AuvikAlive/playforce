import Styled from 'styled-components'
import { editIcon, cardMedia } from '../../../styledMixins/'

export const StyledSiteCard = Styled.div`
  ${cardMedia};

  .card-content {
    position: relative;
    ${editIcon};
  }
`
