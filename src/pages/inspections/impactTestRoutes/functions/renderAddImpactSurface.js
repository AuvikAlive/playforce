import React from 'react'
import Loadable from '../../../../components/loadable/LoadableLinear'
import { showActionGo } from '../../../../functions/'

const AddImpactSurface = Loadable({
  loader: () => import('../../addImpactSurface'),
})

AddImpactSurface.preload()

export const renderAddImpactSurface = component => routerProps => {
  const { addSurfaceTest, userId, inspectionId, match } = component.props

  return (
    <AddImpactSurface
      addSurfaceTest={data => addSurfaceTest(userId, inspectionId, data)}
      afterSubmit={showActionGo(
        component,
        'Impact test added!',
        `${match.url}/edit/`
      )}
      {...routerProps}
    />
  )
}
