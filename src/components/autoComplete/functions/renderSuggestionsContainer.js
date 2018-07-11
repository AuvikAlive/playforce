import React from 'react'
import Paper from '@material-ui/core/Paper'

export const renderSuggestionsContainer = options => {
  const { containerProps, children } = options

  return (
    <Paper {...containerProps} square>
      {children}
    </Paper>
  )
}
