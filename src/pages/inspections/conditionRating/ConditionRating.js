import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Loadable from '../../../components/loadable/LoadableLinear'
import ConditionRatingList from '../conditionRatingList'

const AddConditionRating = Loadable({
  loader: () => import('../addConditionRating'),
})

AddConditionRating.preload()

export const ConditionRating = ({ match }) => {
  return (
    <Switch>
      <Route path={`${match.url}/add`} component={AddConditionRating} />
      <Route path={match.url} component={ConditionRatingList} />
    </Switch>
  )
}
