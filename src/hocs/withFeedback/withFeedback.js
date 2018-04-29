import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { getDisplayName } from '../../utilities/getDisplayName'
import { StyledFeedback } from './StyledFeedback'

const snackbarAutoHideDuration = 2000

export const withFeedback = WrappedComponent => {
  class WithFeedback extends Component {
    state = {
      error: '',
      success: '',
      loading: false,
    }

    setFeedback = ({ error, success, loading }) => {
      this.setState({
        error: error ? error : '',
        success: success ? success : '',
        loading: loading ? loading : false,
      })

      if (success) {
        this.context.openSnackbar(snackbarAutoHideDuration, success)
        return new Promise(resolve => {
          setTimeout(() => resolve(), snackbarAutoHideDuration)
        })
      }
    }

    render() {
      const { error, loading } = this.state

      return (
        <StyledFeedback className="StyledFeedback">
          <WrappedComponent
            setFeedback={this.setFeedback}
            error={error}
            loading={loading}
            {...this.props}
          />
        </StyledFeedback>
      )
    }
  }

  WithFeedback.contextTypes = {
    openSnackbar: PropTypes.func,
    closeSnackbar: PropTypes.func,
  }

  WithFeedback.displayName = `WithFeedback(${getDisplayName(WrappedComponent)})`

  return WithFeedback
}
