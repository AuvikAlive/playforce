import React, { Component } from 'react'
import Dialog from '@material-ui/core/Dialog'
import Slide from '@material-ui/core/Slide'
import { getDisplayName } from '../../functions/getDisplayName'

const Transition = props => {
  return <Slide direction="up" {...props} />
}

export const withFullscreenDialog = WrappedComponent => {
  class WithFullscreenDialog extends Component {
    state = {
      dialogOpen: false,
      DialogContent: null,
    }

    openDialog = DialogContent => {
      this.setState({ dialogOpen: true, DialogContent })
    }

    closeDialog = () => {
      this.setState({ dialogOpen: false })
    }

    render() {
      const { dialogOpen, DialogContent } = this.state

      return (
        <div>
          <Dialog
            fullScreen
            TransitionComponent={Transition}
            open={dialogOpen}
            onClose={this.closeDialog}
          >
            <div>
              {DialogContent && (
                <DialogContent closeDialog={this.closeDialog} />
              )}
            </div>
          </Dialog>
          <WrappedComponent
            closeDialog={this.closeDialog}
            openDialog={this.openDialog}
            {...this.props}
          />
        </div>
      )
    }
  }

  WithFullscreenDialog.displayName = `WithFullscreenDialog(${getDisplayName(
    WrappedComponent
  )})`

  return WithFullscreenDialog
}
