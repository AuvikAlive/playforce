import React, { Component } from 'react'
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

export class MaintenanceIssueRoutes extends Component {
  async componentDidMount() {
    const {
      inspectionLoaded,
      userId,
      inspectionId,
      fetchInspectionRealTime,
      maintenanceIssuesLoaded,
      fetchMaintenanceIssues,
    } = this.props

    const { addUnsubscriber } = this.context

    !inspectionLoaded &&
      addUnsubscriber(await fetchInspectionRealTime(userId, inspectionId))
    !maintenanceIssuesLoaded && fetchMaintenanceIssues(userId, inspectionId)
  }

  render() {
    const { inspectionLoaded, maintenanceIssuesLoaded, match } = this.props

    return inspectionLoaded && maintenanceIssuesLoaded ? (
      <Switch>
        <Route path={`${match.url}/add`} component={AddMaintenanceIssue} />
        <Route
          path={`${match.url}/edit/:id`}
          component={EditMaintenanceIssue}
        />
        <Route path={match.url} component={MaintenanceIssuesList} />
      </Switch>
    ) : (
      <LinearProgress />
    )
  }
}
