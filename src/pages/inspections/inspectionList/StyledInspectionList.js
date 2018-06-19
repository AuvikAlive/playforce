import Styled from 'styled-components'
import { Content } from '../../../components/content/Content'
import {
  addIcon,
  editIcon,
  pulseEffect,
  cardMedia,
  listItemSelected,
} from '../../../styledMixins/'

export const StyledInspectionList = Styled(Content)`
  ${addIcon};
  ${pulseEffect};
  ${cardMedia};
  ${listItemSelected};

  &.grid {
    max-width: 100%;

    .list-item {
      cursor: default;
    }
  }

  .avatar {
    color: ${({ theme }) => theme.palette.primary.main};
  }

  .secondary-actions {
    height: 100%;
    padding: 12px 0;
    display: flex;
    align-items: flex-end;
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

  .card-content {
    position: relative;
    ${editIcon};
  }

  .title {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`
