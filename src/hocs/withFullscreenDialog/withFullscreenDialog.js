import React, { Component } from 'react'
import Dialog from '@material-ui/core/Dialog'
import { getDisplayName } from '../../functions/getDisplayName'
import { SlideTransition } from './SlideTransition'
import { state } from './state'
import { openDialog, closeDialog } from './functions/'

export const withFullscreenDialog = WrappedComponent => {
  class WithFullscreenDialog extends Component {
    state = state

    render() {
      const { dialogOpen, DialogContent } = this.state
      const { forwardedRef, ...rest } = this.props

      return (
        <div>
          <Dialog
            fullScreen
            TransitionComponent={SlideTransition}
            open={dialogOpen}
            onClose={closeDialog(this)}
          >
            <div>{DialogContent && DialogContent}</div>
          </Dialog>

          <WrappedComponent
            closeDialog={closeDialog(this)}
            openDialog={openDialog(this)}
            ref={forwardedRef}
            {...rest}
          />
        </div>
      )
    }
  }

  WithFullscreenDialog.displayName = `WithFullscreenDialog(${getDisplayName(
    WrappedComponent
  )})`

  return React.forwardRef((props, ref) => {
    return <WithFullscreenDialog {...props} forwardedRef={ref} />
  })
}
