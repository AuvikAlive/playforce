import React from 'react'
import { Route, Switch } from 'react-router-dom'
import ConditionRatingList from '../conditionRatingList'
import {
  renderAddConditionRating,
  renderEditConditionRating,
} from './functions/'

export const ConditionRatingRoutes = props => {
  const { conditionRatings, match } = props
  return (
    <Switch>
      <Route
        path={`${match.url}/add`}
        render={renderAddConditionRating({ props })}
      />

      <Route
        path={`${match.url}/edit/:id`}
        render={renderEditConditionRating({ props })}
      />

      <Route
        path={match.url}
        render={routerProps => (
          <ConditionRatingList {...{ conditionRatings }} {...routerProps} />
        )}
      />
    </Switch>
  )
}
