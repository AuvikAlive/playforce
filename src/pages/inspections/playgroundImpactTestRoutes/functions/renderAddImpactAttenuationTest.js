import React from 'react'
import Loadable from '../../../../components/loadable/LoadableLinear'
import { showActionGo } from '../../../../functions/'

const AddImpactAttenuationTest = Loadable({
  loader: () => import('../../addImpactAttenuationTest'),
})

AddImpactAttenuationTest.preload()

export const renderAddImpactAttenuationTest = props => routerProps => {
  const {
    savePlaygroundImpactGeneralInfo,
    userId,
    inspectionId,
    playgroundId,
    match,
  } = props

  return (
    <AddImpactAttenuationTest
      saveImpactGeneralInfo={data =>
        savePlaygroundImpactGeneralInfo(
          userId,
          inspectionId,
          playgroundId,
          data
        )
      }
      afterSubmit={showActionGo({ props }, 'Impact test added!', match.url)}
      {...routerProps}
    />
  )
}
