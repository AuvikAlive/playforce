import React from 'react'
import Loadable from '../../../../components/loadable/LoadableLinear'

const ImpactTestDetailRoutes = Loadable({
  loader: () => import('../../impactTestDetailRoutes'),
})

// ImpactTestDetailRoutes.preload()

export const renderImpactTestDetailRoutes = props => routerProps => {
  const {
    updatePlaygroundSurfaceTest,
    deletePlaygroundSurfaceTest,
    savePlaygroundImpactComment,
    addPlaygroundDropTest,
    updatePlaygroundDropTest,
    deletePlaygroundDropTest,
    userId,
    inspectionId,
    playgroundId,
    impactTests,
  } = props

  const impactTestId = routerProps.match.params.id
  const impactTest = impactTests.find(item => item.id === impactTestId)

  return (
    <ImpactTestDetailRoutes
      updateImpactSurface={data =>
        updatePlaygroundSurfaceTest({
          userId,
          inspectionId,
          playgroundId,
          id: impactTestId,
          data,
        })
      }
      deleteSurfaceTest={() =>
        deletePlaygroundSurfaceTest(
          userId,
          inspectionId,
          playgroundId,
          impactTest
        )
      }
      saveImpactComment={data =>
        savePlaygroundImpactComment({
          userId,
          inspectionId,
          playgroundId,
          id: impactTestId,
          data,
        })
      }
      addDropTest={data =>
        addPlaygroundDropTest({
          userId,
          inspectionId,
          impactTestId,
          playgroundId,
          data,
        })
      }
      updateDropTest={(dropTestId, data) =>
        updatePlaygroundDropTest({
          userId,
          inspectionId,
          impactTestId,
          playgroundId,
          id: dropTestId,
          data,
        })
      }
      deleteDropTest={dropTestId =>
        deletePlaygroundDropTest({
          userId,
          inspectionId,
          impactTestId,
          playgroundId,
          id: dropTestId,
        })
      }
      {...{ impactTest }}
      {...routerProps}
    />
  )
}
