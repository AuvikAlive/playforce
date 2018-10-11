import React from 'react'
import Loadable from '../../../../components/loadable/LoadableLinear'

const EditComplianceIssue = Loadable({
  loader: () => import('../../editComplianceIssue'),
})

// EditComplianceIssue.preload()

export const renderEditComplianceIssue = props => routerProps => {
  const {
    playground,
    updatePlaygroundComplianceIssue,
    deletePlaygroundComplianceIssue,
    userId,
    inspectionId,
    playgroundId,
  } = props

  const { complianceIssues, playingSurfaces } = playground

  return (
    <EditComplianceIssue
      updateComplianceIssue={data =>
        updatePlaygroundComplianceIssue({
          userId,
          inspectionId,
          playgroundId,
          id: routerProps.match.params.id,
          data,
        })
      }
      deleteComplianceIssue={images =>
        deletePlaygroundComplianceIssue({
          userId,
          inspectionId,
          playgroundId,
          id: routerProps.match.params.id,
          images,
        })
      }
      {...{ complianceIssues, playingSurfaces }}
      {...routerProps}
    />
  )
}
