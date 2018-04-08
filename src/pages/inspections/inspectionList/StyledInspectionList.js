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

  .secondary-actions {
    height: 100%;
    display: flex;
    align-items: center;
    align-self: flex-end;

    .chip {
      color: white;
      height: 24px;
      border-radius: 0;
      width: 68.6821px;
    }

    .chip.comprehensive {
      background-color: ${({ theme }) => theme.palette.secondary.main};
    }

    .chip.operational {
      background-color: ${({ theme }) => theme.palette.error.main};
    }

    .chip.routine {
      background-color: ${({ theme }) => theme.palette.success};
    }

    .icon {
      margin-left: 8px;
    }
  }
`
