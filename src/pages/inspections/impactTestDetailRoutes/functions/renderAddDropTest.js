import React from 'react'
import Loadable from '../../../../components/loadable/LoadableLinear'
import { showActionGo } from '../../../../functions/'

const AddDropTest = Loadable({
  loader: () => import('../../addDropTest'),
})

AddDropTest.preload()

export const renderAddDropTest = props => routerProps => {
  const { match, addDropTest } = props
  const pathHead = `${match.url}/editDrop/`

  return (
    <AddDropTest
      afterSubmit={showActionGo({ props }, 'Drop test added!', pathHead)}
      {...{ addDropTest }}
      {...routerProps}
    />
  )
}
