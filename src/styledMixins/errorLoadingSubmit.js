export const errorLoadingSubmit = `
  .error {
    color: ${({ theme }) => theme.palette.error.main};
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
`