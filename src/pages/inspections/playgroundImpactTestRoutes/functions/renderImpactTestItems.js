import React from 'react'
import { ImpactTestItems } from '../../impactTestItems/ImpactTestItems'

export const renderImpactTestItems = props => routerProps => {
  const {
    impactTests,
    deletePlaygroundImpactTest,
    userId,
    inspectionId,
    playgroundId,
  } = props

  return (
    <ImpactTestItems
      deleteImpactTest={() =>
        deletePlaygroundImpactTest(
          userId,
          inspectionId,
          playgroundId,
          impactTests
        )
      }
      {...{ impactTests }}
      {...routerProps}
    />
  )
}
