import React from 'react'
import { Route, Switch } from 'react-router-dom'
import {
  renderImpactTestItems,
  renderAddImpactAttenuationTest,
  renderEditImpactGeneralInfo,
  renderAddImpactSurface,
  renderImpactTestDetailRoutes,
} from './functions/'

export const ImpactTestRoutes = props => {
  const { match } = props
  return (
    <Switch>
      <Route
        path={`${match.url}/edit/:id`}
        render={renderImpactTestDetailRoutes({ props })}
      />

      <Route
        path={`${match.url}/add`}
        render={renderAddImpactSurface({ props })}
      />

      <Route
        path={`${match.url}/general`}
        render={renderEditImpactGeneralInfo({ props })}
      />

      <Route
        path={`${match.url}/addAttenuationTest`}
        render={renderAddImpactAttenuationTest({ props })}
      />

      <Route path={match.url} render={renderImpactTestItems({ props })} />
    </Switch>
  )
}
