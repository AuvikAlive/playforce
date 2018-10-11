import React from 'react'
import Loadable from '../../../../components/loadable/LoadableLinear'
import { showActionGo } from '../../../../functions/'

const AddImpactSurface = Loadable({
  loader: () => import('../../addImpactSurface'),
})

// AddImpactSurface.preload()

export const renderAddImpactSurface = ({ props }) => routerProps => {
  const { addSurfaceTest, userId, inspectionId, match } = props

  return (
    <AddImpactSurface
      addSurfaceTest={data => addSurfaceTest(userId, inspectionId, data)}
      afterSubmit={showActionGo(
        { props },
        'Impact test added!',
        `${match.url}/edit/`
      )}
      {...routerProps}
    />
  )
}
