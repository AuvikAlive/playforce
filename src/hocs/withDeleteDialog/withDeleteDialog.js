import React, { Component } from 'react'
import Dialog from '@material-ui/core/Dialog'
import { getDisplayName } from '../../functions/getDisplayName'
import { DialogContent } from './DialogContent'
import { state } from './state'
import { openDialog, closeDialog } from './functions/'

export const withDeleteDialog = WrappedComponent => {
  class WithDeleteDialog extends Component {
    state = state

    render() {
      const { dialogOpen, handleConfirmation } = this.state

      return (
        <div>
          <Dialog open={dialogOpen} onClose={closeDialog(this)}>
            <DialogContent
              handleConfirmation={handleConfirmation}
              closeDialog={closeDialog(this)}
            />
          </Dialog>
          <WrappedComponent openDialog={openDialog(this)} {...this.props} />
        </div>
      )
    }
  }

  WithDeleteDialog.displayName = `WithDeleteDialog(${getDisplayName(
    WrappedComponent
  )})`

  return WithDeleteDialog
}
