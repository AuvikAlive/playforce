import React, { Component } from 'react'
import Dialog from '@material-ui/core/Dialog'
import { getDisplayName } from '../../functions/getDisplayName'
import { Content } from './Content'
import { state } from './state'
import { openDialog, closeDialog } from './functions/'

export const withDialog = WrappedComponent => {
  class WithDialog extends Component {
    state = state

    render() {
      const {
        dialogOpen,
        handleConfirmationAsync,
        handleConfirmation,
        message,
        contentComponent,
      } = this.state

      return (
        <div>
          <Dialog open={dialogOpen} onClose={closeDialog(this)}>
            <Content
              closeDialog={closeDialog(this)}
              {...{
                handleConfirmationAsync,
                handleConfirmation,
                message,
                contentComponent,
              }}
            />
          </Dialog>

          <WrappedComponent
            closeDialog={closeDialog(this)}
            openDialog={openDialog(this)}
            {...this.props}
          />
        </div>
      )
    }
  }

  WithDialog.displayName = `WithDialog(${getDisplayName(WrappedComponent)})`

  return WithDialog
}
