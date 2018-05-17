import React from 'react'
import { Route, Switch } from 'react-router-dom'
import { LinearProgress } from 'material-ui/Progress'
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

export const ConditionRatingRoutes = ({
  inspectionId,
  userId,
  inspectionLoaded,
  fetchInspectionRealTime,
  conditionRatingsLoaded,
  fetchConditionRatings,
  match,
}) => {
  !inspectionLoaded &&
    inspectionId &&
    fetchInspectionRealTime(userId, inspectionId)
  !conditionRatingsLoaded && fetchConditionRatings(userId, inspectionId)

  return inspectionLoaded ? (
    <Switch>
      <Route path={`${match.url}/add`} component={AddConditionRating} />
      <Route path={`${match.url}/edit/:id`} component={EditConditionRating} />
      <Route path={match.url} component={ConditionRatingList} />
    </Switch>
  ) : (
    <LinearProgress />
  )
}
