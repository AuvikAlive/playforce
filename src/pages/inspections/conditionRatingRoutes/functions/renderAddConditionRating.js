import React from 'react'
import Loadable from '../../../../components/loadable/LoadableLinear'

const AddConditionRating = Loadable({
  loader: () => import('../../addConditionRating'),
})

// AddConditionRating.preload()

export const renderAddConditionRating = ({ props }) => routerProps => {
  const { userId, inspectionId, addConditionRating } = props

  return (
    <AddConditionRating
      addConditionRating={data =>
        addConditionRating(userId, inspectionId, data)
      }
      {...routerProps}
    />
  )
}
