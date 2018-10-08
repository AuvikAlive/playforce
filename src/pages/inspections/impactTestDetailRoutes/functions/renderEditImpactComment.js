import React from 'react'
import Loadable from '../../../../components/loadable/LoadableLinear'

const EditImpactComment = Loadable({
  loader: () => import('../../editImpactComment'),
})

EditImpactComment.preload()

export const renderEditImpactComment = props => routerProps => {
  const { impactTest, saveImpactComment } = props
  const { comment } = impactTest

  return (
    <EditImpactComment {...{ comment, saveImpactComment }} {...routerProps} />
  )
}
