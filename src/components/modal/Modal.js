import React from 'react'
import Modal from 'material-ui/Modal'
import { withStyles } from 'material-ui/styles'
import CloseIcon from 'material-ui-icons/Close'
import { withRouter } from 'react-router-dom'

const MyModal = ({ open, handleClose, classes, children, history }) => {
  history.listen(() => {
    handleClose()
  })

  return (
    <Modal
      aria-labelledby="simple-modal-title"
      aria-describedby="simple-modal-description"
      open={open}
      onClose={handleClose}
    >
      <div style={getModalStyle()} className={classes.paper}>
        <CloseIcon className={classes.closeIcon} onClick={handleClose} />
        {children}
      </div>
    </Modal>
  )
}

const getModalStyle = () => {
  const top = 50
  const left = 50

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`
  }
}

const styles = theme => ({
  closeIcon: {
    position: 'absolute',
    top: 8,
    right: 8,
    zIndex: 100,
    color: 'gray',
    cursor: 'pointer'
  },
  paper: {
    position: 'absolute',
    minWidth: theme.spacing.unit * 50,
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing.unit * 4,
    outline: 'none'
  }
})

export default withRouter(withStyles(styles)(MyModal))
