import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Loadable from '../../../components/loadable/LoadableLinear'
import ComplianceIssuesList from '../complianceIssuesList'

const AddComplianceIssue = Loadable({
  loader: () => import('../addComplianceIssue'),
})

const EditComplianceIssue = Loadable({
  loader: () => import('../editComplianceIssue'),
})

AddComplianceIssue.preload()
EditComplianceIssue.preload()

export const ComplianceIssues = ({
  inspectionLoaded,
  inspectionId,
  fetchInspection,
  userId,
  match,
}) => {
  !inspectionLoaded && inspectionId && fetchInspection(userId, inspectionId)

  return (
    <Switch>
      <Route path={`${match.url}/add`} component={AddComplianceIssue} />
      <Route path={`${match.url}/edit/:id`} component={EditComplianceIssue} />
      <Route path={match.url} component={ComplianceIssuesList} />
    </Switch>
  )
}
