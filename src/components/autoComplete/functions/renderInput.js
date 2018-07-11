import React from 'react'
import TextField from '@material-ui/core/TextField'

export const renderInput = inputProps => {
  const { ref, label, ...other } = inputProps

  return (
    <TextField
      fullWidth
      label={label}
      style={{ marginTop: '8px' }}
      InputProps={{
        inputRef: ref,
        ...other,
      }}
    />
  )
}
