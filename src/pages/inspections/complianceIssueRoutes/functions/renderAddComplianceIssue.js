import React from 'react'
import Loadable from '../../../../components/loadable/LoadableLinear'

const AddComplianceIssue = Loadable({
  loader: () => import('../../addComplianceIssue'),
})

// AddComplianceIssue.preload()

export const renderAddComplianceIssue = ({ props }) => routerProps => {
  const { addComplianceIssue, userId, inspectionId, playingSurfaces } = props

  return (
    <AddComplianceIssue
      addComplianceIssue={data =>
        addComplianceIssue(userId, inspectionId, data)
      }
      {...{ playingSurfaces }}
      {...routerProps}
    />
  )
}
