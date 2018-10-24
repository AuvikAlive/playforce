import React from 'react'
import Loadable from '../../../../components/loadable/LoadableLinear'

const StandaloneEditImpactTestRoutes = Loadable({
  loader: () => import('../../standaloneEditImpactTestRoutes'),
})

export const renderEditImpactTestRoutes = ({ props }) => routerProps => {
  return <StandaloneEditImpactTestRoutes {...routerProps} />
}
