import React, { Component } from 'react'
import Snackbar from 'material-ui/Snackbar'
import { getDisplayName } from '../../utilities/getDisplayName'
import { StyledErrorLoadingSubmit } from './StyledErrorLoadingSubmit'

export const withErrorLoadingSubmit = WrappedComponent => {
  class WithErrorLoadingSubmit extends Component {
    state = {
      error: '',
      success: '',
      loading: false,
      snackbarOpen: false,
    }

    openSnackbar = () => {
      this.setState({ snackbarOpen: true })
    }

    closeSnackbar = () => {
      this.setState({ snackbarOpen: false })
    }

    setErrorLoadingState = ({ error, success, loading }) => {
      this.setState({
        error: error ? error : '',
        success: success ? success : '',
        loading: loading ? loading : false,
      })
      success && this.openSnackbar()
    }

    render() {
      const { error, success, loading, snackbarOpen } = this.state

      return (
        <StyledErrorLoadingSubmit className="StyledErrorLoadingSubmit">
          <WrappedComponent
            setErrorLoadingState={this.setErrorLoadingState}
            error={error}
            loading={loading}
            {...this.props}
          />
          <Snackbar
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'left',
            }}
            open={snackbarOpen}
            autoHideDuration={2000}
            onClose={this.closeSnackbar}
            message={<span id="message-id">{error || success}</span>}
          />
        </StyledErrorLoadingSubmit>
      )
    }
  }

  WithErrorLoadingSubmit.displayName = `WithErrorLoadingSubmit(${getDisplayName(
    WrappedComponent
  )})`

  return WithErrorLoadingSubmit
}
