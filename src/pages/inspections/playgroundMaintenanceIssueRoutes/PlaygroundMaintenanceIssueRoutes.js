import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import Loadable from '../../../components/loadable/LoadableLinear'
import { contextTypesUnsubscriber } from '../../../constants/'
import MaintenanceIssuesList from '../maintenanceIssuesList'

const AddMaintenanceIssue = Loadable({
  loader: () => import('../addMaintenanceIssue'),
})

const EditMaintenanceIssue = Loadable({
  loader: () => import('../editMaintenanceIssue'),
})

AddMaintenanceIssue.preload()
EditMaintenanceIssue.preload()

export class PlaygroundMaintenanceIssueRoutes extends Component {
  render() {
    const {
      playground: { maintenanceIssues },
      addPlaygroundMaintenanceIssue,
      updatePlaygroundMaintenanceIssue,
      deletePlaygroundMaintenanceIssue,
      userId,
      inspectionId,
      playgroundId,
      match,
    } = this.props

    return (
      <Switch>
        <Route
          path={`${match.url}/add`}
          render={props => (
            <AddMaintenanceIssue
              addMaintenanceIssue={data =>
                addPlaygroundMaintenanceIssue(
                  userId,
                  inspectionId,
                  playgroundId,
                  data
                )
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
                updatePlaygroundMaintenanceIssue({
                  userId,
                  inspectionId,
                  playgroundId,
                  id: props.match.params.id,
                  data,
                })
              }
              deleteMaintenanceIssue={images =>
                deletePlaygroundMaintenanceIssue({
                  userId,
                  inspectionId,
                  playgroundId,
                  id: props.match.params.id,
                  images,
                })
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

PlaygroundMaintenanceIssueRoutes.contextTypes = contextTypesUnsubscriber
