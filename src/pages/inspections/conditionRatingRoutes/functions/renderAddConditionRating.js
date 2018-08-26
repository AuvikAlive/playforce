import React from 'react'
import Loadable from '../../../../components/loadable/LoadableLinear'

const AddConditionRating = Loadable({
  loader: () => import('../../addConditionRating'),
})

AddConditionRating.preload()

export const renderAddConditionRating = component => props => {
  const { userId, inspectionId, addConditionRating } = component.props

  return (
    <AddConditionRating
      addConditionRating={data =>
        addConditionRating(userId, inspectionId, data)
      }
      {...props}
    />
  )
}
