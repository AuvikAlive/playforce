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
    const {
      inspectionLoaded,
      maintenanceIssuesLoaded,
      maintenanceIssues,
      addMaintenanceIssue,
      updateMaintenanceIssue,
      deleteMaintenanceIssue,
      userId,
      inspectionId,
      match,
    } = this.props
    const isLoaded = inspectionLoaded && maintenanceIssuesLoaded

    return showContentWhenLoaded(
      isLoaded,
      <Switch>
        <Route
          path={`${match.url}/add`}
          render={props => (
            <AddMaintenanceIssue
              addMaintenanceIssue={data =>
                addMaintenanceIssue(userId, inspectionId, data)
              }
              {...props}
            />
          )}
        />

        <Route
          path={`${match.url}/edit/:id`}
          render={props => (
            <EditMaintenanceIssue
              updateMaintenanceIssue={data =>
                updateMaintenanceIssue(
                  userId,
                  inspectionId,
                  props.match.params.id,
                  data
                )
              }
              deleteMaintenanceIssue={images =>
                deleteMaintenanceIssue(
                  userId,
                  inspectionId,
                  props.match.params.id,
                  images
                )
              }
              {...{ maintenanceIssues }}
              {...props}
            />
          )}
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
}

MaintenanceIssueRoutes.contextTypes = contextTypesUnsubscriber
