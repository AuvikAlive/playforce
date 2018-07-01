import React, { Component } from 'react'
import Dialog from '@material-ui/core/Dialog'
import { getDisplayName } from '../../functions/getDisplayName'
import { DialogContent } from './DialogContent'

export const withDeleteDialog = WrappedComponent => {
  class WithDeleteDialog extends Component {
    state = {
      dialogOpen: false,
      handleConfirmation: null,
    }

    openDialog = handleConfirmation => {
      this.setState({ dialogOpen: true, handleConfirmation })
    }

    closeDialog = () => {
      this.setState({ dialogOpen: false })
    }

    render() {
      const { dialogOpen, handleConfirmation } = this.state

      return (
        <div>
          <Dialog open={dialogOpen} onClose={this.closeDialog}>
            <DialogContent
              handleConfirmation={handleConfirmation}
              closeDialog={this.closeDialog}
            />
          </Dialog>
          <WrappedComponent openDialog={this.openDialog} {...this.props} />
        </div>
      )
    }
  }

  WithDeleteDialog.displayName = `WithDeleteDialog(${getDisplayName(
    WrappedComponent
  )})`

  return WithDeleteDialog
}
