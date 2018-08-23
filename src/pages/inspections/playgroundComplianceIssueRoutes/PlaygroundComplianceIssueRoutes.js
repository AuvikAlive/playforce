import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import Loadable from '../../../components/loadable/LoadableLinear'
import ComplianceIssuesList from '../complianceIssuesList/'

const AddComplianceIssue = Loadable({
  loader: () => import('../addComplianceIssue'),
})

const EditComplianceIssue = Loadable({
  loader: () => import('../editComplianceIssue'),
})

AddComplianceIssue.preload()
EditComplianceIssue.preload()

export class PlaygroundComplianceIssueRoutes extends Component {
  render() {
    const {
      playground: { complianceIssues },
      addPlaygroundComplianceIssue,
      updatePlaygroundComplianceIssue,
      deletePlaygroundComplianceIssue,
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
            <AddComplianceIssue
              addComplianceIssue={data =>
                addPlaygroundComplianceIssue(
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
            <EditComplianceIssue
              updateComplianceIssue={data =>
                updatePlaygroundComplianceIssue({
                  userId,
                  inspectionId,
                  playgroundId,
                  id: props.match.params.id,
                  data,
                })
              }
              deleteComplianceIssue={images =>
                deletePlaygroundComplianceIssue({
                  userId,
                  inspectionId,
                  playgroundId,
                  id: props.match.params.id,
                  images,
                })
              }
              {...{ complianceIssues }}
              {...props}
            />
          )}
        />

        <Route
          path={match.url}
          render={props => (
            <ComplianceIssuesList {...{ complianceIssues }} {...props} />
          )}
        />
      </Switch>
    )
  }
}
