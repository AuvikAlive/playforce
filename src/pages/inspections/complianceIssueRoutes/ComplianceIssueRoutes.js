import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import Loadable from '../../../components/loadable/LoadableLinear'
import { contextTypesUnsubscriber } from '../../../constants/'
import { showContentWhenLoaded } from '../../../functions/'
import ComplianceIssuesList from '../complianceIssuesList'
import { onComponentDidMount } from './onComponentDidMount'

const AddComplianceIssue = Loadable({
  loader: () => import('../addComplianceIssue'),
})

const EditComplianceIssue = Loadable({
  loader: () => import('../editComplianceIssue'),
})

AddComplianceIssue.preload()
EditComplianceIssue.preload()

export class ComplianceIssueRoutes extends Component {
  componentDidMount() {
    onComponentDidMount(this)
  }

  render() {
    const {
      inspectionLoaded,
      complianceIssuesLoaded,
      complianceIssues,
      addComplianceIssue,
      updateComplianceIssue,
      deleteComplianceIssue,
      userId,
      inspectionId,
      match,
    } = this.props
    const isLoaded = inspectionLoaded && complianceIssuesLoaded

    return showContentWhenLoaded(
      isLoaded,
      <Switch>
        <Route
          path={`${match.url}/add`}
          render={props => (
            <AddComplianceIssue
              addComplianceIssue={data =>
                addComplianceIssue(userId, inspectionId, data)
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
                updateComplianceIssue(
                  userId,
                  inspectionId,
                  props.match.params.id,
                  data
                )
              }
              deleteComplianceIssue={images =>
                deleteComplianceIssue(
                  userId,
                  inspectionId,
                  props.match.params.id,
                  images
                )
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

ComplianceIssueRoutes.contextTypes = contextTypesUnsubscriber
