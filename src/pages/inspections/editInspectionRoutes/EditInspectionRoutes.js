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

const ComplianceIssueRoutes = Loadable({
  loader: () => import('../complianceIssueRoutes'),
})

const MaintenanceIssueRoutes = Loadable({
  loader: () => import('../maintenanceIssueRoutes'),
})

const ImpactTestRoutes = Loadable({
  loader: () => import('../impactTestRoutes'),
})

const CustomCertificateText = Loadable({
  loader: () => import('../customCertificateText'),
})

const Notes = Loadable({
  loader: () => import('../notes'),
})

const PlayingSurfaceRoutes = Loadable({
  loader: () => import('../playingSurfaceRoutes'),
})

const PlaygroundRoutes = Loadable({
  loader: () => import('../playgroundRoutes'),
})

EditCover.preload()
AuditSummary.preload()
ConditionRatingRoutes.preload()
ComplianceIssueRoutes.preload()
MaintenanceIssueRoutes.preload()
ImpactTestRoutes.preload()
CustomCertificateText.preload()
Notes.preload()
PlayingSurfaceRoutes.preload()
PlaygroundRoutes.preload()

export const EditInspectionRoutes = ({ match }) => {
  return (
    <Switch>
      <Route path={`${match.url}/:id/cover`} component={EditCover} />

      <Route path={`${match.url}/:id/auditSummary`} component={AuditSummary} />

      <Route
        path={`${match.url}/:id/conditionRating`}
        component={ConditionRatingRoutes}
      />

      <Route
        path={`${match.url}/:id/complianceIssues`}
        component={ComplianceIssueRoutes}
      />

      <Route
        path={`${match.url}/:id/maintenanceIssues`}
        component={MaintenanceIssueRoutes}
      />

      <Route
        path={`${match.url}/:id/impactTest`}
        component={ImpactTestRoutes}
      />

      <Route
        path={`${match.url}/:id/certificateText`}
        component={CustomCertificateText}
      />

      <Route path={`${match.url}/:id/notes`} component={Notes} />

      <Route
        path={`${match.url}/:id/playingSurfaces`}
        component={PlayingSurfaceRoutes}
      />

      <Route
        path={`${match.url}/:id/playgrounds`}
        component={PlaygroundRoutes}
      />

      <Route path={`${match.url}/:id`} component={EditInspection} />
    </Switch>
  )
}
