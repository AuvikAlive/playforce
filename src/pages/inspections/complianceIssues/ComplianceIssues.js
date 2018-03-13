import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Loadable from '../../../components/loadable/LoadableLinear'
import ComplianceIssuesList from '../complianceIssuesList'

export const ComplianceIssues = ({ match }) => {
  return (
    <Switch>
      <Route path={match.url} component={ComplianceIssuesList} />
    </Switch>
  )
}
