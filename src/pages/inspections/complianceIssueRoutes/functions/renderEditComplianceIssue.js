import React from 'react'
import Loadable from '../../../../components/loadable/LoadableLinear'

const EditComplianceIssue = Loadable({
  loader: () => import('../../editComplianceIssue'),
})

EditComplianceIssue.preload()

export const renderEditComplianceIssue = ({ props }) => routerProps => {
  const {
    complianceIssues,
    updateComplianceIssue,
    deleteComplianceIssue,
    userId,
    inspectionId,
    playingSurfaces,
  } = props

  return (
    <EditComplianceIssue
      updateComplianceIssue={data =>
        updateComplianceIssue(
          userId,
          inspectionId,
          routerProps.match.params.id,
          data
        )
      }
      deleteComplianceIssue={images =>
        deleteComplianceIssue(
          userId,
          inspectionId,
          routerProps.match.params.id,
          images
        )
      }
      {...{ complianceIssues, playingSurfaces }}
      {...routerProps}
    />
  )
}
