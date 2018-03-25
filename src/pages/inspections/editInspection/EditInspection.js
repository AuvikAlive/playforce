import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Loadable from '../../../components/loadable/LoadableLinear'
import InspectionItemsEdit from '../inspectionItemsEdit'

const Cover = Loadable({
  loader: () => import('../cover'),
})
const AuditSummary = Loadable({
  loader: () => import('../auditSummary'),
})
const ConditionRating = Loadable({
  loader: () => import('../conditionRating'),
})
const ComplianceIssues = Loadable({
  loader: () => import('../complianceIssues'),
})
const MaintenanceIssues = Loadable({
  loader: () => import('../maintenanceIssues'),
})

Cover.preload()
AuditSummary.preload()
ConditionRating.preload()
ComplianceIssues.preload()
MaintenanceIssues.preload()

export const EditInspection = ({ match }) => {
  return (
    <Switch>
      <Route path={`${match.url}/cover`} component={Cover} />
      <Route path={`${match.url}/auditSummary`} component={AuditSummary} />
      <Route
        path={`${match.url}/conditionRating`}
        component={ConditionRating}
      />
      <Route
        path={`${match.url}/complianceIssues`}
        component={ComplianceIssues}
      />
      <Route
        path={`${match.url}/maintenanceIssues`}
        component={MaintenanceIssues}
      />
      <Route path={`${match.url}`} component={InspectionItemsEdit} />
    </Switch>
  )
}
