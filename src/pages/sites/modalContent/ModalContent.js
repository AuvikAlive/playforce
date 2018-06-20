import React from 'react'
import Card, { CardActions, CardContent } from '@material-ui/core/Card'
import Button from '@material-ui/core/Button'
import { StyledModalContent } from './StyledModalContent'

export const ModalContent = ({ closeDialog, handleConfirmation }) => {
  const onConfirmation = () => {
    handleConfirmation()
    closeDialog()
  }

  return (
    <StyledModalContent className="StyledModalContent">
      <Card>
        <CardContent>Delete this site?</CardContent>
        <CardActions className="card-actions">
          <Button size="small" onClick={closeDialog}>
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
