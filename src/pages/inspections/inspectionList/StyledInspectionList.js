import Styled from 'styled-components'
import { Content } from '../../../components/content/Content'
import { addIcon } from '../../../styledMixins/addIcon'
import { pulseEffect } from '../../../styledMixins/pulseEffect'

export const StyledInspectionList = Styled(Content)`
  ${addIcon};
  ${pulseEffect};

  .avatar {
    color: ${({ theme }) => theme.palette.primary.main};
  }
`
