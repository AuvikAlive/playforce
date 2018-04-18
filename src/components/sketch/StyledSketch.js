import Styled from 'styled-components'
import { Content } from '../content/Content'
import { cardMediaPortrait } from '../../styledMixins/cardMediaPortrait'

export const StyledSketch = Styled(Content)`
  ${cardMediaPortrait};

  .sketch-actions {
    margin: 8px 0;
    display: flex;
    justify-content: center;
  }

  .color-picker {
    width: auto;
  }
`
