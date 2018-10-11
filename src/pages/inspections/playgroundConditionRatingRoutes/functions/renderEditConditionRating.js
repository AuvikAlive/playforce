import React from 'react'
import Loadable from '../../../../components/loadable/LoadableLinear'

const EditConditionRating = Loadable({
  loader: () => import('../../editConditionRating'),
})

// EditConditionRating.preload()

export const renderEditConditionRating = props => routerProps => {
  const {
    playground: { conditionRatings },
    updatePlaygroundConditionRating,
    deletePlaygroundConditionRating,
    userId,
    inspectionId,
    playgroundId,
  } = props

  return (
    <EditConditionRating
      updateConditionRating={data =>
        updatePlaygroundConditionRating({
          userId,
          inspectionId,
          playgroundId,
          id: routerProps.match.params.id,
          data,
        })
      }
      deleteConditionRating={() =>
        deletePlaygroundConditionRating(
          userId,
          inspectionId,
          playgroundId,
          routerProps.match.params.id
        )
      }
      {...{ conditionRatings }}
      {...routerProps}
    />
  )
}
