import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Loadable from '../../../components/loadable/LoadableLinear'
import ConditionRatingList from '../conditionRatingList'

export const ConditionRating = ({ match }) => {
  return (
    <Switch>
      <Route path={match.url} component={ConditionRatingList} />
    </Switch>
  )
}
