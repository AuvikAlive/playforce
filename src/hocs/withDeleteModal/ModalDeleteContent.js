import React from 'react'
import Card, { CardActions, CardContent } from 'material-ui/Card'
import Button from 'material-ui/Button'
import { CircularProgress } from 'material-ui/Progress'
import { StyledModalDeleteContent } from './StyledModalDeleteContent'
import { withFeedback } from '../withFeedback/withFeedback'

const ModalDeleteContentWithoutErrorLoading = ({
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
    <StyledModalDeleteContent className="StyledModalDeleteContent">
      <Card>
        <CardContent>
          <div>Delete this item?</div>

          {error && <p className="error">{error}</p>}

          {!error &&
            loading && (
              <div className="loading">
                <CircularProgress />
              </div>
            )}
        </CardContent>

        {!loading && (
          <CardActions className="card-actions">
            <Button size="small" onClick={closeModal}>
              Cancel
            </Button>
            <Button size="small" onClick={onConfirmation}>
              OK
            </Button>
          </CardActions>
        )}
      </Card>
    </StyledModalDeleteContent>
  )
}

export const ModalDeleteContent = withFeedback(
  ModalDeleteContentWithoutErrorLoading
)
