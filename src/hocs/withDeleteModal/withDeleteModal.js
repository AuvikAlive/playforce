import React, { Component } from 'react'
import { getDisplayName } from '../../utilities/getDisplayName'
import Modal from '../../components/modal/Modal'
import { ModalDeleteContent } from './ModalDeleteContent'

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
          <Modal open={modalOpen} handleClose={this.closeModal} hideCloseIcon>
            <ModalDeleteContent
              handleConfirmation={handleConfirmation}
              closeModal={this.closeModal}
            />
          </Modal>
          <WrappedComponent openModal={this.openModal} {...this.props} />
        </div>
      )
    }
  }

  WithDeleteModal.displayName = `WithDeleteModal(${getDisplayName(
    WrappedComponent,
  )})`

  return WithDeleteModal
}
