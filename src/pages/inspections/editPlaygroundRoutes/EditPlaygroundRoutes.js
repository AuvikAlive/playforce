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

const MaintenanceIssueRoutes = Loadable({
  loader: () => import('../maintenanceIssueRoutes'),
})

PlaygroundConditionRatingRoutes.preload()
PlaygroundComplianceIssueRoutes.preload()
MaintenanceIssueRoutes.preload()

export const EditPlaygroundRoutes = ({ match, playgroundId, inspectionId }) => {
  return (
    <Switch>
      <Route
        path={`${match.url}/conditionRating`}
        render={props => (
          <PlaygroundConditionRatingRoutes {...{ playgroundId }} {...props} />
        )}
      />

      <Route
        path={`${match.url}/complianceIssues`}
        render={props => (
          <PlaygroundComplianceIssueRoutes {...{ playgroundId }} {...props} />
        )}
      />

      <Route
        path={`${match.url}/maintenanceIssues`}
        component={MaintenanceIssueRoutes}
      />

      <Route
        path={match.url}
        render={props => <PlaygroundItems {...{ playgroundId }} {...props} />}
      />
    </Switch>
  )
}
