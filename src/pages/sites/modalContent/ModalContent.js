import React from 'react'
import Card, { CardActions, CardContent } from 'material-ui/Card'
import Button from 'material-ui/Button'
import { StyledModalContent } from './StyledModalContent'

export const ModalContent = ({ closeModal, handleConfirmation }) => {
  const onConfirmation = () => {
    handleConfirmation()
    closeModal()
  }

  return (
    <StyledModalContent className="StyledModalContent">
      <Card>
        <CardContent>Delete this site?</CardContent>
        <CardActions className="card-actions">
          <Button size="small" onClick={closeModal}>
            Cancel
          </Button>
          <Button size="small" onClick={onConfirmation}>
            OK
          </Button>
        </CardActions>
      </Card>
    </StyledModalContent>
  )
}
