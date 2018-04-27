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

export const MaintenanceIssuesRoutes = ({
  inspectionLoaded,
  inspectionId,
  fetchInspectionRealTime,
  userId,
  maintenanceIssuesLoaded,
  fetchMaintenanceIssuesRealTime,
  match,
}) => {
  !inspectionLoaded &&
    inspectionId &&
    fetchInspectionRealTime(userId, inspectionId)
  !maintenanceIssuesLoaded &&
    fetchMaintenanceIssuesRealTime(userId, inspectionId)

  return inspectionLoaded ? (
    <Switch>
      <Route path={`${match.url}/add`} component={AddMaintenanceIssue} />
      <Route path={`${match.url}/edit/:id`} component={EditMaintenanceIssue} />
      <Route path={match.url} component={MaintenanceIssuesList} />
    </Switch>
  ) : (
    <LinearProgress />
  )
}
