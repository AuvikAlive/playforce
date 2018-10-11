import React from 'react'
import Loadable from '../../../../components/loadable/LoadableLinear'
import { showActionGo } from '../../../../functions/'

const AddImpactSurface = Loadable({
  loader: () => import('../../addImpactSurface'),
})

// AddImpactSurface.preload()

export const renderAddImpactSurface = props => routerProps => {
  const {
    addPlaygroundSurfaceTest,
    userId,
    inspectionId,
    playgroundId,
    match,
  } = props

  return (
    <AddImpactSurface
      addSurfaceTest={data =>
        addPlaygroundSurfaceTest(userId, inspectionId, playgroundId, data)
      }
      afterSubmit={showActionGo(
        { props },
        'Impact test added!',
        `${match.url}/edit/`
      )}
      {...routerProps}
    />
  )
}
