import Styled from 'styled-components'
import { Content } from '../../../components/content/Content'
import { datePicker, withButton } from '../../../styledMixins/'

export const StyledStandaloneImpactGeneralInfoForm = Styled(Content)`
  ${datePicker};
  ${withButton};
`
