import React, { Component } from "react"
import { NavContext } from "components/NavContextProvider/"
import { getDisplayName } from "../../functions/"
import { StyledFeedback } from "./StyledFeedback"
import { state } from "./constants/"
import { setFeedback } from "./setFeedback"

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

  WithFeedback.contextType = NavContext
  WithFeedback.displayName = `WithFeedback(${getDisplayName(WrappedComponent)})`

  return WithFeedback
}
