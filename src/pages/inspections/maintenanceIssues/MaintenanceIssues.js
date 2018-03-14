import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Loadable from '../../../components/loadable/LoadableLinear'
import MaintenanceIssuesList from '../maintenanceIssuesList'

const AddMaintenanceIssue = Loadable({
  loader: () => import('../addMaintenanceIssue'),
})

AddMaintenanceIssue.preload()

export const MaintenanceIssues = ({ match }) => {
  return (
    <Switch>
      <Route path={`${match.url}/add`} component={AddMaintenanceIssue} />
      <Route path={match.url} component={MaintenanceIssuesList} />
    </Switch>
  )
}
