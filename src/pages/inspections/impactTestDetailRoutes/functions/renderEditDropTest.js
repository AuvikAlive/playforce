import React from 'react'
import Loadable from '../../../../components/loadable/LoadableLinear'

const EditDropTest = Loadable({
  loader: () => import('../../editDropTest'),
})

EditDropTest.preload()

export const renderEditDropTest = props => routerProps => {
  const {
    impactTests,
    userId,
    inspectionId,
    impactTestId,
    updateDropTest,
    deleteDropTest,
  } = props

  const dropTestId = routerProps.match.params.id

  const dropTest =
    impactTests.find(item => item.id === impactTestId) &&
    impactTests
      .find(item => item.id === impactTestId)
      .dropTests.find(item => item.id === dropTestId)

  return (
    <EditDropTest
      updateDropTest={data =>
        updateDropTest({
          userId,
          inspectionId,
          impactTestId,
          id: dropTestId,
          data,
        })
      }
      deleteDropTest={() =>
        deleteDropTest(userId, inspectionId, impactTestId, dropTestId)
      }
      {...{ dropTest }}
      {...routerProps}
    />
  )
}
