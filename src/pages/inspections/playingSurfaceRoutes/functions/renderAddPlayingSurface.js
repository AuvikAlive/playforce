import React from 'react'
import Loadable from '../../../../components/loadable/LoadableLinear'

const AddPlayingSurface = Loadable({
  loader: () => import('../../addPlayingSurface'),
})

// AddPlayingSurface.preload()

export const renderAddPlayingSurface = ({ props }) => routerProps => {
  const { addPlayingSurface, userId, inspectionId } = props

  return (
    <AddPlayingSurface
      addPlayingSurface={data => addPlayingSurface(userId, inspectionId, data)}
      {...routerProps}
    />
  )
}
