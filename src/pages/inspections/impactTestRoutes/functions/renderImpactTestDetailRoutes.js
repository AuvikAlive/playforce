import React from 'react'
import Loadable from '../../../../components/loadable/LoadableLinear'

const ImpactTestDetailRoutes = Loadable({
  loader: () => import('../../impactTestDetailRoutes'),
})

ImpactTestDetailRoutes.preload()

export const renderImpactTestDetailRoutes = ({ props }) => routerProps => {
  const {
    deleteSurfaceTest,
    updateImpactSurface,
    addDropTest,
    updateDropTest,
    deleteDropTest,
    userId,
    inspectionId,
    impactTests,
  } = props

  const impactTestId = routerProps.match.params.id
  const impactTest = impactTests.find(item => item.id === impactTestId)

  return (
    <ImpactTestDetailRoutes
      deleteSurfaceTest={() =>
        deleteSurfaceTest(userId, inspectionId, impactTest)
      }
      updateImpactSurface={data =>
        updateImpactSurface(userId, inspectionId, impactTestId, data)
      }
      addDropTest={data =>
        addDropTest(userId, inspectionId, impactTestId, data)
      }
      updateDropTest={(dropTestId, data) =>
        updateDropTest({
          userId,
          inspectionId,
          impactTestId,
          id: dropTestId,
          data,
        })
      }
      deleteDropTest={dropTestId =>
        deleteDropTest(userId, inspectionId, impactTestId, dropTestId)
      }
      {...{ impactTest }}
      {...routerProps}
    />
  )
}
