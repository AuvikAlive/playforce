import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import Loadable from '../../../components/loadable/LoadableLinear'
import { contextTypesUnsubscriber } from '../../../constants/'
import { showContentWhenLoaded } from '../../../functions/'
import MaintenanceIssuesList from '../maintenanceIssuesList'
import { onComponentDidMount } from './onComponentDidMount'

const AddMaintenanceIssue = Loadable({
  loader: () => import('../addMaintenanceIssue'),
})

const EditMaintenanceIssue = Loadable({
  loader: () => import('../editMaintenanceIssue'),
})

AddMaintenanceIssue.preload()
EditMaintenanceIssue.preload()

export class MaintenanceIssueRoutes extends Component {
  componentDidMount() {
    onComponentDidMount(this)
  }

  render() {
    const { inspectionLoaded, maintenanceIssuesLoaded, match } = this.props
    const isLoaded = inspectionLoaded && maintenanceIssuesLoaded

    return showContentWhenLoaded(
      isLoaded,
      <Switch>
        <Route path={`${match.url}/add`} component={AddMaintenanceIssue} />

        <Route
          path={`${match.url}/edit/:id`}
          component={EditMaintenanceIssue}
        />

        <Route path={match.url} component={MaintenanceIssuesList} />
      </Switch>
    )
  }
}

MaintenanceIssueRoutes.contextTypes = contextTypesUnsubscriber
