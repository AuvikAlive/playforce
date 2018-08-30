import React from 'react'
import Loadable from '../../../../components/loadable/LoadableLinear'
import { showActionGo } from '../../../../functions/'

const AddDropTest = Loadable({
  loader: () => import('../../addDropTest'),
})

AddDropTest.preload()

export const renderAddDropTest = props => routerProps => {
  const { match, addDropTest, userId, inspectionId, impactTestId } = props
  const pathHead = `${match.url}/editDrop/`

  return (
    <AddDropTest
      addDropTest={data =>
        addDropTest(userId, inspectionId, impactTestId, data)
      }
      afterSubmit={showActionGo({ props }, 'Drop test added!', pathHead)}
      {...routerProps}
    />
  )
}
