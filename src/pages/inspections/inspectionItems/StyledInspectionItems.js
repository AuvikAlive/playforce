import Styled from 'styled-components'
import { Content } from '../../../components/content/Content'
import { centerContentVertically } from '../../../styledMixins/centerContentVertically'

export const StyledInspectionItems = Styled(Content)`
  ${centerContentVertically};

  > * {
    width: 100%;
  }

  /* .discard-button {
    background: ${({ theme }) => theme.palette.error.main};
    color: white;
  } */
`
