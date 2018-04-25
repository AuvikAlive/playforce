import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Loadable from '../../../components/loadable/LoadableLinear'
import ConditionRatingList from '../conditionRatingList'

const AddConditionRating = Loadable({
  loader: () => import('../addConditionRating'),
})

const EditConditionRating = Loadable({
  loader: () => import('../editConditionRating'),
})

AddConditionRating.preload()
EditConditionRating.preload()

export const ConditionRating = ({
  inspectionLoaded,
  inspectionId,
  fetchInspection,
  userId,
  match,
}) => {
  !inspectionLoaded && inspectionId && fetchInspection(userId, inspectionId)

  return (
    <Switch>
      <Route path={`${match.url}/add`} component={AddConditionRating} />
      <Route path={`${match.url}/edit/:id`} component={EditConditionRating} />
      <Route path={match.url} component={ConditionRatingList} />
    </Switch>
  )
}
