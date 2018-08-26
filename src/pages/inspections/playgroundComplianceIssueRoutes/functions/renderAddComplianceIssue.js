import React from 'react'
import Loadable from '../../../../components/loadable/LoadableLinear'

const AddComplianceIssue = Loadable({
  loader: () => import('../../addComplianceIssue'),
})

AddComplianceIssue.preload()

export const renderAddComplianceIssue = props => routerProps => {
  const {
    addPlaygroundComplianceIssue,
    userId,
    inspectionId,
    playgroundId,
  } = props

  return (
    <AddComplianceIssue
      addComplianceIssue={data =>
        addPlaygroundComplianceIssue(userId, inspectionId, playgroundId, data)
      }
      {...routerProps}
    />
  )
}
