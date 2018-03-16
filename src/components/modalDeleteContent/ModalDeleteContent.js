import React from 'react'
import Card, { CardActions, CardContent } from 'material-ui/Card'
import Button from 'material-ui/Button'
import { StyledModalDeleteContent } from './StyledModalDeleteContent'

export const ModalDeleteContent = ({ closeModal, handleConfirmation }) => {
  const onConfirmation = () => {
    handleConfirmation()
    closeModal()
  }

  return (
    <StyledModalDeleteContent className="StyledModalDeleteContent">
      <Card>
        <CardContent>Delete this item?</CardContent>
        <CardActions className="card-actions">
          <Button size="small" onClick={closeModal}>
            Cancel
          </Button>
          <Button size="small" onClick={onConfirmation}>
            OK
          </Button>
        </CardActions>
      </Card>
    </StyledModalDeleteContent>
  )
}
