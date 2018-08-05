import React from 'react'
import Button from '@material-ui/core/Button'
import CircularProgress from '@material-ui/core/CircularProgress'
import DialogActions from '@material-ui/core/DialogActions'
import DialogTitle from '@material-ui/core/DialogTitle'
import { StyledDialogContent } from './StyledDialogContent'
import { withFeedback } from '../withFeedback/withFeedback'

const DialogContentWithout = ({
  closeDialog,
  handleConfirmation,
  message,
  setFeedback,
  error,
  loading,
}) => {
  const onConfirmation = async () => {
    setFeedback({ error: '', loading: true })

    try {
      handleConfirmation && (await handleConfirmation())
      setFeedback({ loading: false })
      closeDialog()
    } catch (error) {
      setFeedback({ error: error.message, loading: false })
    }
  }

  return (
    <StyledDialogContent className="StyledDialogContent">
      <DialogTitle>{message || 'Delete this item?'}</DialogTitle>

      {!error &&
        loading && (
          <div className="loading">
            <CircularProgress />
          </div>
        )}

      {!loading && (
        <DialogActions>
          <Button size="small" onClick={closeDialog}>
            Cancel
          </Button>
          <Button size="small" onClick={onConfirmation}>
            OK
          </Button>
        </DialogActions>
      )}
    </StyledDialogContent>
  )
}

export const DialogContent = withFeedback(DialogContentWithout)
