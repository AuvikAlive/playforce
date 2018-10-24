import React from 'react'
import { withFeedback } from '../../../hocs/withFeedback/withFeedback'
import { Route, Switch } from 'react-router-dom'
import {
  renderEditImpactTestRoutes,
  renderAddImpactAttenuationTest,
} from './functions/'

const BaseStandaloneImpactTestRoutes = props => {
  const { match } = props

  return (
    <Switch>
      <Route
        path={`${match.url}/add`}
        render={renderAddImpactAttenuationTest({ props })}
      />

      <Route
        path={`${match.url}/edit/:id`}
        render={renderEditImpactTestRoutes({ props })}
      />
    </Switch>
  )
}

export const StandaloneImpactTestRoutes = withFeedback(
  BaseStandaloneImpactTestRoutes
)
