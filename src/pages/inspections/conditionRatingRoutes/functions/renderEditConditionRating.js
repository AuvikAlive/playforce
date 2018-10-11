import React from 'react'
import Loadable from '../../../../components/loadable/LoadableLinear'

const EditConditionRating = Loadable({
  loader: () => import('../../editConditionRating'),
})

// EditConditionRating.preload()

export const renderEditConditionRating = ({ props }) => routerProps => {
  const {
    conditionRatings,
    updateConditionRating,
    deleteConditionRating,
    userId,
    inspectionId,
  } = props

  return (
    <EditConditionRating
      updateConditionRating={data =>
        updateConditionRating(
          userId,
          inspectionId,
          routerProps.match.params.id,
          data
        )
      }
      deleteConditionRating={() =>
        deleteConditionRating(userId, inspectionId, routerProps.match.params.id)
      }
      {...{
        conditionRatings,
      }}
      {...routerProps}
    />
  )
}
