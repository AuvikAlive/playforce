import Styled from 'styled-components'

export const StyledFeedback = Styled.div`
  .error {
    color: ${({ theme }) => theme.palette.error.main};
    text-align: center;
  }

  .loading {
    display: flex;
    justify-content: center;
  }

  .error,
  .loading,
  .submit-button {
    margin-top: 16px;
    margin-bottom: 8px;
  }

  .submit-button {
    .button-icon {
      margin-left: 16px;
    }
  }
`
