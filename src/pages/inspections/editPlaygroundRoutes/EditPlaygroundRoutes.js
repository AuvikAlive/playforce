import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Loadable from '../../../components/loadable/LoadableLinear'
import PlaygroundItems from '../playgroundItems/'

const PlaygroundConditionRatingRoutes = Loadable({
  loader: () => import('../playgroundConditionRatingRoutes'),
})

const ComplianceIssueRoutes = Loadable({
  loader: () => import('../complianceIssueRoutes'),
})

const MaintenanceIssueRoutes = Loadable({
  loader: () => import('../maintenanceIssueRoutes'),
})

PlaygroundConditionRatingRoutes.preload()
ComplianceIssueRoutes.preload()
MaintenanceIssueRoutes.preload()

export const EditPlaygroundRoutes = ({ match, playgroundId, inspectionId }) => {
  return (
    <Switch>
      <Route
        path={`${match.url}/conditionRating`}
        render={props => (
          <PlaygroundConditionRatingRoutes
            playgroundId={playgroundId}
            inspectionId={inspectionId}
            {...props}
          />
        )}
      />

      <Route
        path={`${match.url}/complianceIssues`}
        component={ComplianceIssueRoutes}
      />

      <Route
        path={`${match.url}/maintenanceIssues`}
        component={MaintenanceIssueRoutes}
      />

      <Route
        path={match.url}
        render={props => (
          <PlaygroundItems playgroundId={playgroundId} {...props} />
        )}
      />
    </Switch>
  )
}
