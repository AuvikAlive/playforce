import React, { Component } from 'react'
import { getDisplayName } from '../../functions/getDisplayName'
import { StyledFeedback } from './StyledFeedback'
import { state, contextTypes } from './constants/'
import { setFeedback } from './setFeedback'

export const withFeedback = WrappedComponent => {
  class WithFeedback extends Component {
    state = state

    render() {
      const { error, loading } = this.state

      return (
        <StyledFeedback className="StyledFeedback">
          <WrappedComponent
            setFeedback={setFeedback(this)}
            error={error}
            loading={loading}
            {...this.props}
          />
        </StyledFeedback>
      )
    }
  }

  WithFeedback.contextTypes = contextTypes
  WithFeedback.displayName = `WithFeedback(${getDisplayName(WrappedComponent)})`

  return WithFeedback
}
