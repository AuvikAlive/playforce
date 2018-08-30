import React from 'react'
import Loadable from '../../../../components/loadable/LoadableLinear'

const EditDropTest = Loadable({
  loader: () => import('../../editDropTest'),
})

EditDropTest.preload()

export const renderEditDropTest = props => routerProps => {
  const { impactTest, updateDropTest, deleteDropTest } = props
  const dropTestId = routerProps.match.params.id
  const dropTest = impactTest.dropTests.find(item => item.id === dropTestId)

  return (
    <EditDropTest
      updateDropTest={data => updateDropTest(dropTestId, data)}
      deleteDropTest={() => deleteDropTest(dropTestId)}
      {...{ dropTest }}
      {...routerProps}
    />
  )
}
