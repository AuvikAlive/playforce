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
      const { dialogOpen, handleConfirmation, message } = this.state
      const { forwardedRef, ...rest } = this.props

      return (
        <div>
          <Dialog open={dialogOpen} onClose={closeDialog(this)}>
            <DialogContent
              handleConfirmation={handleConfirmation}
              closeDialog={closeDialog(this)}
              message={message}
            />
          </Dialog>
          <WrappedComponent
            openDialog={openDialog(this)}
            ref={forwardedRef}
            {...rest}
          />
        </div>
      )
    }
  }

  WithDeleteDialog.displayName = `WithDeleteDialog(${getDisplayName(
    WrappedComponent
  )})`

  return React.forwardRef((props, ref) => {
    return <WithDeleteDialog {...props} forwardedRef={ref} />
  })
}
