import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Loadable from '../../../components/loadable/LoadableLinear'
import PlaygroundItems from '../playgroundItems/'

const PlaygroundConditionRatingRoutes = Loadable({
  loader: () => import('../playgroundConditionRatingRoutes'),
})

const PlaygroundComplianceIssueRoutes = Loadable({
  loader: () => import('../playgroundComplianceIssueRoutes'),
})

const PlaygroundMaintenanceIssueRoutes = Loadable({
  loader: () => import('../playgroundMaintenanceIssueRoutes'),
})

const PlaygroundPlayingSurfaceRoutes = Loadable({
  loader: () => import('../playgroundPlayingSurfaceRoutes'),
})

const PlaygroundImpactTestRoutes = Loadable({
  loader: () => import('../playgroundImpactTestRoutes'),
})

PlaygroundConditionRatingRoutes.preload()
PlaygroundComplianceIssueRoutes.preload()
PlaygroundMaintenanceIssueRoutes.preload()
PlaygroundPlayingSurfaceRoutes.preload()
PlaygroundImpactTestRoutes.preload()

export const EditPlaygroundRoutes = ({ match, playgroundId, inspectionId }) => {
  return (
    <Switch>
      <Route
        path={`${match.url}/conditionRating`}
        render={routerProps => (
          <PlaygroundConditionRatingRoutes
            {...{ playgroundId }}
            {...routerProps}
          />
        )}
      />

      <Route
        path={`${match.url}/complianceIssues`}
        render={routerProps => (
          <PlaygroundComplianceIssueRoutes
            {...{ playgroundId }}
            {...routerProps}
          />
        )}
      />

      <Route
        path={`${match.url}/maintenanceIssues`}
        render={routerProps => (
          <PlaygroundMaintenanceIssueRoutes
            {...{ playgroundId }}
            {...routerProps}
          />
        )}
      />

      <Route
        path={`${match.url}/playingSurfaces`}
        render={routerProps => (
          <PlaygroundPlayingSurfaceRoutes
            {...{ playgroundId }}
            {...routerProps}
          />
        )}
      />

      <Route
        path={`${match.url}/impactTest`}
        render={routerProps => (
          <PlaygroundImpactTestRoutes {...{ playgroundId }} {...routerProps} />
        )}
      />

      <Route
        path={match.url}
        render={routerProps => (
          <PlaygroundItems {...{ playgroundId }} {...routerProps} />
        )}
      />
    </Switch>
  )
}
