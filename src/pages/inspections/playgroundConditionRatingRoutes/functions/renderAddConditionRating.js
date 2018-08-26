import React from 'react'
import Loadable from '../../../../components/loadable/LoadableLinear'

const AddConditionRating = Loadable({
  loader: () => import('../../addConditionRating'),
})

AddConditionRating.preload()

export const renderAddConditionRating = props => routerProps => {
  const {
    addPlaygroundConditionRating,
    userId,
    inspectionId,
    playgroundId,
  } = props

  return (
    <AddConditionRating
      addConditionRating={data =>
        addPlaygroundConditionRating(userId, inspectionId, playgroundId, data)
      }
      {...routerProps}
    />
  )
}
