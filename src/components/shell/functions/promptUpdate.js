import React from 'react'
import Button from '@material-ui/core/Button'
import { openSnackbar } from './openSnackbar'

export const promptUpdate = component => {
  openSnackbar(component)(
    7000,
    'App update is available.',
    <Button
      color="secondary"
      size="small"
      onClick={() => window.location.reload(true)}
    >
      click to update
    </Button>
  )
}
