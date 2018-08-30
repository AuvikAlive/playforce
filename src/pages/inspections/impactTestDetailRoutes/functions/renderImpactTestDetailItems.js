import React from 'react'
import { ImpactTestDetailItems } from '../../impactTestDetailItems/ImpactTestDetailItems'

export const renderImpactTestDetailItems = props => routerProps => {
  const { impactTest, deleteSurfaceTest, userId, inspectionId } = props

  return (
    <ImpactTestDetailItems
      deleteSurfaceTest={() =>
        deleteSurfaceTest(userId, inspectionId, impactTest)
      }
      {...{ impactTest }}
      {...routerProps}
    />
  )
}
