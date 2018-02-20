import React from 'react'
import { Route, Redirect } from 'react-router-dom'

export const AuthenticatedRoute = ({
  component: Component,
  authenticated,
  redirectRoute,
  ...rest
}) => (
  <Route
    {...rest}
    render={props =>
      authenticated ? (
        <Component {...props} />
      ) : (
        <Redirect
          to={{
            pathname: redirectRoute,
            state: { from: props.location }
          }}
        />
      )
    }
  />
)
