import React from 'react'
import { ImpactTestDetailItems } from '../../impactTestDetailItems/ImpactTestDetailItems'

export const renderImpactTestDetailItems = props => routerProps => {
  const { impactTest, deleteSurfaceTest } = props

  return (
    <ImpactTestDetailItems
      {...{ impactTest, deleteSurfaceTest }}
      {...routerProps}
    />
  )
}
