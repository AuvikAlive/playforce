import Styled from 'styled-components'
import { Content } from '../content/Content'
import { cardMediaPortrait } from '../../styledMixins/cardMediaPortrait'

export const StyledSketch = Styled(Content)`
  ${cardMediaPortrait};

  .sketch-actions {
    display: flex;
    justify-content: center;
    padding: 0 16px;
  }

  .color-picker {
    margin: 32px 0;
  }
`
