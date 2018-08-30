import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import { contextTypesUnsubscriber } from '../../../constants/'
import { showContentWhenLoaded } from '../../../functions/'
import ComplianceIssuesList from '../complianceIssuesList'
import {
  onComponentDidMount,
  renderAddComplianceIssue,
  renderEditComplianceIssue,
} from './functions/'

export class ComplianceIssueRoutes extends Component {
  componentDidMount() {
    onComponentDidMount(this)
  }

  render() {
    const {
      inspectionLoaded,
      complianceIssuesLoaded,
      playingSurfacesLoaded,
      complianceIssues,
      match,
    } = this.props

    const isLoaded =
      inspectionLoaded && complianceIssuesLoaded && playingSurfacesLoaded

    return showContentWhenLoaded(
      isLoaded,
      <Switch>
        <Route
          path={`${match.url}/add`}
          render={renderAddComplianceIssue(this)}
        />

        <Route
          path={`${match.url}/edit/:id`}
          render={renderEditComplianceIssue(this)}
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
