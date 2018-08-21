import Styled from 'styled-components'

export const StyledInspectionListView = Styled.div`
  .secondary-actions {
    height: 100%;
    padding: 12px 0;
    display: flex;
    align-items: flex-end;
    align-self: flex-end;
    pointer-events: none;

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
