import React from 'react'
import Loadable from '../../../../components/loadable/LoadableLinear'
import { showActionGo } from '../../../../functions/'

const AddImpactAttenuationTest = Loadable({
  loader: () => import('../../addImpactAttenuationTest'),
})

AddImpactAttenuationTest.preload()

export const renderAddImpactAttenuationTest = component => routerProps => {
  const { saveImpactGeneralInfo, userId, inspectionId, match } = component.props

  return (
    <AddImpactAttenuationTest
      saveImpactGeneralInfo={data =>
        saveImpactGeneralInfo(userId, inspectionId, data)
      }
      afterSubmit={showActionGo(component, 'Impact test added!', match.url)}
      {...routerProps}
    />
  )
}
