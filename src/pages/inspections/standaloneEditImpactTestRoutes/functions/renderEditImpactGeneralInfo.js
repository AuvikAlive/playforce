import React from 'react'
import Loadable from '../../../../components/loadable/LoadableLinear'

const StandaloneEditImpactGeneralInfo = Loadable({
  loader: () => import('../../standaloneEditImpactGeneralInfo'),
})

export const renderEditImpactGeneralInfo = ({ props }) => routerProps => {
  const {
    saveImpactGeneralInfo,
    userId,
    inspectionId,
    impactGeneralInfo,
  } = props

  return (
    <StandaloneEditImpactGeneralInfo
      saveImpactGeneralInfo={data =>
        saveImpactGeneralInfo(userId, inspectionId, data)
      }
      {...{ impactGeneralInfo }}
      {...routerProps}
    />
  )
}
