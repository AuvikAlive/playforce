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

export const PlaygroundConditionRatingRoutes = ({
  playground: { conditionRatings },
  addPlaygroundConditionRating,
  updatePlaygroundConditionRating,
  deletePlaygroundConditionRating,
  userId,
  inspectionId,
  playgroundId,
  match,
}) => {
  return (
    <Switch>
      <Route
        path={`${match.url}/add`}
        render={props => (
          <AddConditionRating
            addConditionRating={data =>
              addPlaygroundConditionRating(
                userId,
                inspectionId,
                playgroundId,
                data
              )
            }
            {...props}
          />
        )}
      />

      <Route
        path={`${match.url}/edit/:id`}
        render={props => (
          <EditConditionRating
            updateConditionRating={data =>
              updatePlaygroundConditionRating({
                userId,
                inspectionId,
                playgroundId,
                id: props.match.params.id,
                data,
              })
            }
            deleteConditionRating={() =>
              deletePlaygroundConditionRating(
                userId,
                inspectionId,
                playgroundId,
                props.match.params.id
              )
            }
            {...{ conditionRatings }}
            {...props}
          />
        )}
      />

      <Route
        path={match.url}
        render={props => (
          <ConditionRatingList {...{ conditionRatings }} {...props} />
        )}
      />
    </Switch>
  )
}
