import Styled from 'styled-components'
import { Content } from '../../../components/content/Content'
import { errorLoadingSubmit } from '../../../styledMixins/errorLoadingSubmit'

export const StyledCompany = Styled(Content)`
  ${errorLoadingSubmit};
`
