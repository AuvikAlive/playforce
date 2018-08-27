import React from 'react'
import Loadable from '../../../../components/loadable/LoadableLinear'

const EditPlayingSurface = Loadable({
  loader: () => import('../../editPlayingSurface'),
})

EditPlayingSurface.preload()

export const renderEditPlayingSurface = props => routerProps => {
  const {
    playground: { playingSurfaces },
    updatePlaygroundPlayingSurface,
    deletePlaygroundPlayingSurface,
    userId,
    inspectionId,
    playgroundId,
  } = props

  return (
    <EditPlayingSurface
      updatePlayingSurface={data =>
        updatePlaygroundPlayingSurface({
          userId,
          inspectionId,
          playgroundId,
          id: routerProps.match.params.id,
          data,
        })
      }
      deletePlayingSurface={() =>
        deletePlaygroundPlayingSurface(
          userId,
          inspectionId,
          playgroundId,
          routerProps.match.params.id
        )
      }
      {...{ playingSurfaces }}
      {...routerProps}
    />
  )
}
