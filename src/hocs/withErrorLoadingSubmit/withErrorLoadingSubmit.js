import React, { Component } from 'react'
import { getDisplayName } from '../../utilities/getDisplayName'
import { StyledErrorLoadingSubmit } from './StyledErrorLoadingSubmit'

export const withErrorLoadingSubmit = WrappedComponent => {
  class WithErrorLoadingSubmit extends Component {
    state = {
      error: '',
      loading: false,
    }

    setErrorLoadingState = ({ error, loading }) => {
      this.setState({
        error: error ? error : '',
        loading: loading ? loading : false,
      })
    }

    render() {
      const { error, loading } = this.state

      return (
        <StyledErrorLoadingSubmit className="StyledErrorLoadingSubmit">
          <WrappedComponent
            setErrorLoadingState={this.setErrorLoadingState}
            error={error}
            loading={loading}
            {...this.props}
          />
        </StyledErrorLoadingSubmit>
      )
    }
  }

  WithErrorLoadingSubmit.displayName = `WithErrorLoadingSubmit(${getDisplayName(
    WrappedComponent,
  )})`

  return WithErrorLoadingSubmit
}
