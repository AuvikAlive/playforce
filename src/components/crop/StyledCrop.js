import Styled from 'styled-components'
import { Content } from '../content/Content'

export const StyledCrop = Styled(Content)`
  img {
    max-width: 100%;
  }

  .icon-buttons {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`
