import React, { Component } from 'react'
import Dialog from '@material-ui/core/Dialog'
import { getDisplayName } from '../../utilities/getDisplayName'
import { DialogContent } from './DialogContent'

export const withDeleteModal = WrappedComponent => {
  class WithDeleteModal extends Component {
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

  WithDeleteModal.displayName = `WithDeleteModal(${getDisplayName(
    WrappedComponent
  )})`

  return WithDeleteModal
}
