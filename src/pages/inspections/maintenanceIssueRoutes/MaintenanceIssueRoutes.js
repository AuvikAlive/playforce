import React from 'react'
import { Route, Switch } from 'react-router-dom'
import { LinearProgress } from 'material-ui/Progress'
import Loadable from '../../../components/loadable/LoadableLinear'
import MaintenanceIssuesList from '../maintenanceIssuesList'

const AddMaintenanceIssue = Loadable({
  loader: () => import('../addMaintenanceIssue'),
})

const EditMaintenanceIssue = Loadable({
  loader: () => import('../editMaintenanceIssue'),
})

AddMaintenanceIssue.preload()
EditMaintenanceIssue.preload()

export const MaintenanceIssueRoutes = ({
  inspectionLoaded,
  userId,
  inspectionId,
  fetchInspectionRealTime,
  maintenanceIssuesLoaded,
  fetchMaintenanceIssues,
  match,
}) => {
  !inspectionLoaded && fetchInspectionRealTime(userId, inspectionId)
  !maintenanceIssuesLoaded && fetchMaintenanceIssues(userId, inspectionId)

  return inspectionLoaded && maintenanceIssuesLoaded ? (
    <Switch>
      <Route path={`${match.url}/add`} component={AddMaintenanceIssue} />
      <Route path={`${match.url}/edit/:id`} component={EditMaintenanceIssue} />
      <Route path={match.url} component={MaintenanceIssuesList} />
    </Switch>
  ) : (
    <LinearProgress />
  )
}
