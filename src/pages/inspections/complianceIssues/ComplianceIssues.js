import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Loadable from '../../../components/loadable/LoadableLinear'
import ComplianceIssuesList from '../complianceIssuesList'

const AddComplianceIssue = Loadable({
  loader: () => import('../addComplianceIssue'),
})

AddComplianceIssue.preload()

export const ComplianceIssues = ({ match }) => {
  return (
    <Switch>
      <Route path={`${match.url}/add`} component={AddComplianceIssue} />
      <Route path={match.url} component={ComplianceIssuesList} />
    </Switch>
  )
}
