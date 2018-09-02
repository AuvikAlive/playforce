import React from 'react'
import Loadable from '../../../../components/loadable/LoadableLinear'

const EditImpactGeneralInfo = Loadable({
  loader: () => import('../../editImpactGeneralInfo'),
})

EditImpactGeneralInfo.preload()

export const renderEditImpactGeneralInfo = props => routerProps => {
  const {
    savePlaygroundImpactGeneralInfo,
    userId,
    inspectionId,
    playgroundId,
    playground,
  } = props

  return (
    <EditImpactGeneralInfo
      saveImpactGeneralInfo={data =>
        savePlaygroundImpactGeneralInfo(
          userId,
          inspectionId,
          playgroundId,
          data
        )
      }
      impactGeneralInfo={playground.impactGeneralInfo}
      {...routerProps}
    />
  )
}
