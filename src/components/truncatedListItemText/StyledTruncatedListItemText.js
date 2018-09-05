import Styled from 'styled-components'
import ListItemText from '@material-ui/core/ListItemText'
import { truncate } from '../../styledMixins/'

export const StyledTruncatedListItemText = Styled(ListItemText)`
  span {
    ${truncate};
  }
`
