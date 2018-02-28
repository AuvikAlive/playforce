import React from 'react'
import { CircularProgress } from 'material-ui/Progress'
import { StyledLoadingIndicator } from './StyledLoadingIndicator'

export const LoadingIndicator = props => {
  return (
    <StyledLoadingIndicator {...props}>
      <CircularProgress />
    </StyledLoadingIndicator>
  )
}
