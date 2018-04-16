import Styled from 'styled-components'
import { Content } from '../content/Content'
import { cardMediaPortrait } from '../../styledMixins/cardMediaPortrait'

export const StyledSketch = Styled(Content)`
  ${cardMediaPortrait};

  .card {
    margin-top: 32px;
  }

  .sketch-actions {
    margin-top: 32px;
    display: flex;
    justify-content: center;
  }
`
