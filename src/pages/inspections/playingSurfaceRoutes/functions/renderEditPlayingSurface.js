import React from 'react'
import Loadable from '../../../../components/loadable/LoadableLinear'

const EditPlayingSurface = Loadable({
  loader: () => import('../../editPlayingSurface'),
})

EditPlayingSurface.preload()

export const renderEditPlayingSurface = ({ props }) => routerProps => {
  const {
    updatePlayingSurface,
    deletePlayingSurface,
    userId,
    inspectionId,
    playingSurfaces,
  } = props

  return (
    <EditPlayingSurface
      updatePlayingSurface={data =>
        updatePlayingSurface(
          userId,
          inspectionId,
          routerProps.match.params.id,
          data
        )
      }
      deletePlayingSurface={() =>
        deletePlayingSurface(userId, inspectionId, routerProps.match.params.id)
      }
      {...{ playingSurfaces }}
      {...routerProps}
    />
  )
}
