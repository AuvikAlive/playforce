import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Loadable from '../../../components/loadable/LoadableLinear'
import EditInspection from '../editInspection/'

const EditCover = Loadable({
  loader: () => import('../editCover'),
})
const AuditSummary = Loadable({
  loader: () => import('../auditSummary'),
})
const ConditionRatingRoutes = Loadable({
  loader: () => import('../conditionRatingRoutes'),
})
// const ComplianceIssues = Loadable({
//   loader: () => import('../complianceIssues'),
// })
const MaintenanceIssueRoutes = Loadable({
  loader: () => import('../maintenanceIssueRoutes'),
})

EditCover.preload()
AuditSummary.preload()
ConditionRatingRoutes.preload()
// ComplianceIssues.preload()
MaintenanceIssueRoutes.preload()

export const EditInspectionRoutes = ({ match }) => {
  return (
    <Switch>
      <Route path={`${match.url}/:id/cover`} component={EditCover} />
      <Route path={`${match.url}/:id/auditSummary`} component={AuditSummary} />
      <Route
        path={`${match.url}/:id/conditionRating`}
        component={ConditionRatingRoutes}
      />
      {/* <Route
        path={`${match.url}/:id/complianceIssues`}
        component={ComplianceIssues}
      /> */}
      <Route
        path={`${match.url}/:id/maintenanceIssues`}
        component={MaintenanceIssueRoutes}
      />
      <Route path={`${match.url}/:id`} component={EditInspection} />
    </Switch>
  )
}
