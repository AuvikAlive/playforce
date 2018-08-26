import React from 'react'
import Loadable from '../../../../components/loadable/LoadableLinear'

const EditConditionRating = Loadable({
  loader: () => import('../../editConditionRating'),
})

EditConditionRating.preload()

export const renderEditConditionRating = component => props => {
  const {
    conditionRatings,
    updateConditionRating,
    deleteConditionRating,
    userId,
    inspectionId,
  } = component.props

  return (
    <EditConditionRating
      updateConditionRating={data =>
        updateConditionRating(userId, inspectionId, props.match.params.id, data)
      }
      deleteConditionRating={() =>
        deleteConditionRating(userId, inspectionId, props.match.params.id)
      }
      {...{
        conditionRatings,
      }}
      {...props}
    />
  )
}
