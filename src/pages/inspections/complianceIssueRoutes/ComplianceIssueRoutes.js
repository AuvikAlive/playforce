import React from 'react'
import { Route, Switch } from 'react-router-dom'
import { contextTypesUnsubscriber } from '../../../constants/'
import ComplianceIssuesList from '../complianceIssuesList'
import {
  renderAddComplianceIssue,
  renderEditComplianceIssue,
} from './functions/'

export const ComplianceIssueRoutes = props => {
  const { match, complianceIssues } = props

  return (
    <Switch>
      <Route
        path={`${match.url}/add`}
        render={renderAddComplianceIssue({ props })}
      />

      <Route
        path={`${match.url}/edit/:id`}
        render={renderEditComplianceIssue({ props })}
      />

      <Route
        path={match.url}
        render={routerProps => (
          <ComplianceIssuesList {...{ complianceIssues }} {...routerProps} />
        )}
      />
    </Switch>
  )
}

ComplianceIssueRoutes.contextTypes = contextTypesUnsubscriber
