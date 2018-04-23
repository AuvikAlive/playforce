import React, { Component } from 'react'
import Dialog from 'material-ui/Dialog'
import { getDisplayName } from '../../utilities/getDisplayName'
import { DialogContent } from './DialogContent'

export const withDeleteModal = WrappedComponent => {
  class WithDeleteModal extends Component {
    state = {
      modalOpen: false,
      handleConfirmation: null,
    }

    openModal = handleConfirmation => {
      this.setState({ modalOpen: true, handleConfirmation })
    }

    closeModal = () => {
      this.setState({ modalOpen: false })
    }

    render() {
      const { modalOpen, handleConfirmation } = this.state

      return (
        <div>
          <Dialog open={modalOpen} onClose={this.closeModal}>
            <DialogContent
              handleConfirmation={handleConfirmation}
              closeModal={this.closeModal}
            />
          </Dialog>
          <WrappedComponent openModal={this.openModal} {...this.props} />
        </div>
      )
    }
  }

  WithDeleteModal.displayName = `WithDeleteModal(${getDisplayName(
    WrappedComponent
  )})`

  return WithDeleteModal
}
