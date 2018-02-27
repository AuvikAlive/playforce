import React, { Component } from 'react'
import Modal from 'material-ui/Modal'
import { withRouter } from 'react-router-dom'
import { StyledModal } from './StyledModal'
import { StyledCloseIcon } from './StyledCloseIcon'

class MyModal extends Component {
  state = { unlisten: '' }

  componentDidMount() {
    const { history, handleClose } = this.props

    const unlisten = history.listen(() => {
      handleClose()
    })

    this.setState({ unlisten })
  }

  componentWillUnmount() {
    this.state.unlisten()
  }

  render() {
    const { open, children, handleClose, hideCloseIcon } = this.props

    return (
      <Modal
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
        open={open}
        onClose={handleClose}
      >
        <StyledModal>
          {!hideCloseIcon && <StyledCloseIcon onClick={handleClose} />}
          {children}
        </StyledModal>
      </Modal>
    )
  }
}

export default withRouter(MyModal)
