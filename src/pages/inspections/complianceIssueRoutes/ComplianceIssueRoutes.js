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
    const { inspectionLoaded, complianceIssues, match } = this.props

    return showContentWhenLoaded(
      inspectionLoaded,
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
