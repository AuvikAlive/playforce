import React from 'react'
import Loadable from '../../../../components/loadable/LoadableLinear'

const EditImpactGeneralInfo = Loadable({
  loader: () => import('../../editImpactGeneralInfo'),
})

export const renderEditImpactGeneralInfo = ({ props }) => routerProps => {
  const {
    saveImpactGeneralInfo,
    userId,
    inspectionId,
    impactGeneralInfo,
  } = props

  return (
    <EditImpactGeneralInfo
      saveImpactGeneralInfo={data =>
        saveImpactGeneralInfo(userId, inspectionId, data)
      }
      {...{ impactGeneralInfo }}
      {...routerProps}
    />
  )
}
