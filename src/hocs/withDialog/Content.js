import React from 'react'
import Button from '@material-ui/core/Button'
import CircularProgress from '@material-ui/core/CircularProgress'
import DialogTitle from '@material-ui/core/DialogTitle'
import DialogContent from '@material-ui/core/DialogContent'
import DialogActions from '@material-ui/core/DialogActions'
import { withFeedback } from '../withFeedback/withFeedback'

const ContentBase = ({
  closeDialog,
  handleConfirmationAsync,
  handleConfirmation,
  message,
  contentComponent,
  setFeedback,
  error,
  loading,
}) => {
  const onConfirmation = async () => {
    setFeedback({ error: '', loading: true })

    try {
      if (handleConfirmationAsync) {
        handleConfirmationAsync && (await handleConfirmationAsync())
        setFeedback({ loading: false })
        closeDialog()
      } else {
        handleConfirmation && handleConfirmation()
      }
    } catch (error) {
      setFeedback({ error: error.message, loading: false })
    }
  }

  return (
    <div style={{ overflow: 'hidden' }}>
      <DialogTitle>{message || 'Delete this item?'}</DialogTitle>

      {contentComponent && <DialogContent>{contentComponent}</DialogContent>}

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
    </div>
  )
}

export const Content = withFeedback(ContentBase)
