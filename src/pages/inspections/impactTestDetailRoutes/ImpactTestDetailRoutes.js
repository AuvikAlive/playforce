import React from 'react'
import { Route, Switch } from 'react-router-dom'
import {
  renderImpactTestDetailItems,
  renderEditImpactSurface,
  renderAddDropTest,
  renderEditDropTest,
} from './functions/'

export const ImpactTestDetailRoutes = props => {
  const { match } = props

  return (
    <Switch>
      <Route
        path={`${match.url}/editDrop/:id`}
        render={renderEditDropTest(props)}
      />

      <Route path={`${match.url}/addDrop`} render={renderAddDropTest(props)} />

      <Route
        path={`${match.url}/surface`}
        render={renderEditImpactSurface(props)}
      />

      <Route path={match.url} render={renderImpactTestDetailItems(props)} />
    </Switch>
  )
}
