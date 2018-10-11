import React from 'react'
import Loadable from '../../../../components/loadable/LoadableLinear'

const AddPlayingSurface = Loadable({
  loader: () => import('../../addPlayingSurface'),
})

// AddPlayingSurface.preload()

export const renderAddPlayingSurface = props => routerProps => {
  const {
    addPlaygroundPlayingSurface,
    userId,
    inspectionId,
    playgroundId,
  } = props

  return (
    <AddPlayingSurface
      addPlayingSurface={data =>
        addPlaygroundPlayingSurface(userId, inspectionId, playgroundId, data)
      }
      {...routerProps}
    />
  )
}
