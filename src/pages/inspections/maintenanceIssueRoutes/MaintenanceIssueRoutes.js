import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import { contextTypesUnsubscriber } from '../../../constants/'
import { showContentWhenLoaded } from '../../../functions/'
import MaintenanceIssuesList from '../maintenanceIssuesList'
import {
  onComponentDidMount,
  renderAddMaintenanceIssue,
  renderEditMaintenanceIssue,
} from './functions/'

export class MaintenanceIssueRoutes extends Component {
  componentDidMount() {
    onComponentDidMount(this)
  }

  render() {
    const {
      inspectionLoaded,
      maintenanceIssuesLoaded,
      maintenanceIssues,
      match,
    } = this.props

    const isLoaded = inspectionLoaded && maintenanceIssuesLoaded

    return showContentWhenLoaded(
      isLoaded,
      <Switch>
        <Route
          path={`${match.url}/add`}
          render={renderAddMaintenanceIssue(this)}
        />

        <Route
          path={`${match.url}/edit/:id`}
          render={renderEditMaintenanceIssue(this)}
        />

        <Route
          path={match.url}
          render={routerProps => (
            <MaintenanceIssuesList
              {...{ maintenanceIssues }}
              {...routerProps}
            />
          )}
        />
      </Switch>
    )
  }
}

MaintenanceIssueRoutes.contextTypes = contextTypesUnsubscriber
