import React from 'react'
import { ImpactTestItems } from '../../impactTestItems/ImpactTestItems'

export const renderImpactTestItems = ({ props }) => routerProps => {
  const { impactTests, deleteImpactTest, userId, inspectionId } = props

  return (
    <ImpactTestItems
      deleteImpactTest={() =>
        deleteImpactTest(userId, inspectionId, impactTests)
      }
      {...{ impactTests }}
      {...routerProps}
    />
  )
}
