import React, { Component } from 'react'
import Snackbar from 'material-ui/Snackbar'
import { getDisplayName } from '../../utilities/getDisplayName'
import { StyledFeedback } from './StyledFeedback'

export const withFeedback = WrappedComponent => {
  class WithFeedback extends Component {
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

    setFeedback = ({ error, success, loading }) => {
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
        <StyledFeedback className="StyledFeedback">
          <WrappedComponent
            setFeedback={this.setFeedback}
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
        </StyledFeedback>
      )
    }
  }

  WithFeedback.displayName = `WithFeedback(${getDisplayName(WrappedComponent)})`

  return WithFeedback
}
