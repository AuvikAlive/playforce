import React from 'react'
import Button from 'material-ui/Button'
import { CircularProgress } from 'material-ui/Progress'
import { DialogActions, DialogTitle } from 'material-ui/Dialog'
import { StyledDialogContent } from './StyledDialogContent'
import { withFeedback } from '../withFeedback/withFeedback'

const DialogContentWithout = ({
  closeModal,
  handleConfirmation,
  setFeedback,
  error,
  loading,
}) => {
  const onConfirmation = async () => {
    setFeedback({ error: '', loading: true })

    try {
      handleConfirmation && (await handleConfirmation())
      setFeedback({ loading: false })
      closeModal()
    } catch (error) {
      setFeedback({ error: error.message, loading: false })
    }
  }

  return (
    <StyledDialogContent className="StyledDialogContent">
      <DialogTitle>Delete this item?</DialogTitle>

      {!error &&
        loading && (
          <div className="loading">
            <CircularProgress />
          </div>
        )}

      {!loading && (
        <DialogActions>
          <Button size="small" onClick={closeModal}>
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
