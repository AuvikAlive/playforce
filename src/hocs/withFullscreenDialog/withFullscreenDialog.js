import React, { Component } from 'react'
import Dialog from 'material-ui/Dialog'
import Slide from 'material-ui/transitions/Slide'
import { getDisplayName } from '../../utilities/getDisplayName'

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
            transition={Transition}
            open={dialogOpen}
            onClose={this.closeDialog}
          >
            <div>
              {DialogContent && (
                <DialogContent closeDialog={this.closeDialog} />
              )}
            </div>
          </Dialog>
          <WrappedComponent openDialog={this.openDialog} {...this.props} />
        </div>
      )
    }
  }

  WithFullscreenDialog.displayName = `WithFullscreenDialog(${getDisplayName(
    WrappedComponent
  )})`

  return WithFullscreenDialog
}
