import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Dashboard from '../dashboard/'

export const ManageProjectRoutes = ({ match }) => {
  return (
    <Switch>
      <Route
        path={match.url}
        render={props => <Dashboard id={match.params.id} {...props} />}
      />
    </Switch>
  )
}
