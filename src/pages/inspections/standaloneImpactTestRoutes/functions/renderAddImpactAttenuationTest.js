import React from 'react'
import Loadable from '../../../../components/loadable/LoadableLinear'
import { showActionGo } from '../../../../functions/'

const StandaloneAddImpactAttenuationTest = Loadable({
  loader: () => import('../../standaloneAddImpactAttenuationTest'),
})

export const renderAddImpactAttenuationTest = ({ props }) => routerProps => {
  const { addStandaloneImpactTest, userId, match } = props

  return (
    <StandaloneAddImpactAttenuationTest
      onSubmit={data => addStandaloneImpactTest(userId, data)}
      afterSubmit={id =>
        showActionGo(
          { props },
          'Impact test added!',
          `${match.url}/edit/${id}`
        )()
      }
      {...routerProps}
    />
  )
}
