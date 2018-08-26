import React from 'react'
import { Route, Switch } from 'react-router-dom'
import MaintenanceIssuesList from '../maintenanceIssuesList'
import {
  renderAddMaintenanceIssue,
  renderEditMaintenanceIssue,
} from './functions/'

export const PlaygroundMaintenanceIssueRoutes = props => {
  const {
    playground: { maintenanceIssues },
    match,
  } = props

  return (
    <Switch>
      <Route
        path={`${match.url}/add`}
        render={renderAddMaintenanceIssue(props)}
      />

      <Route
        path={`${match.url}/edit/:id`}
        render={renderEditMaintenanceIssue(props)}
      />

      <Route
        path={match.url}
        render={props => (
          <MaintenanceIssuesList {...{ maintenanceIssues }} {...props} />
        )}
      />
    </Switch>
  )
}
