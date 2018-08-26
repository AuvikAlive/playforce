import React from 'react'
import Loadable from '../../../../components/loadable/LoadableLinear'

const EditMaintenanceIssue = Loadable({
  loader: () => import('../../editMaintenanceIssue'),
})

EditMaintenanceIssue.preload()

export const renderEditMaintenanceIssue = ({ props }) => routerProps => {
  const {
    maintenanceIssues,
    updateMaintenanceIssue,
    deleteMaintenanceIssue,
    userId,
    inspectionId,
  } = props

  return (
    <EditMaintenanceIssue
      updateMaintenanceIssue={data =>
        updateMaintenanceIssue(
          userId,
          inspectionId,
          routerProps.match.params.id,
          data
        )
      }
      deleteMaintenanceIssue={images =>
        deleteMaintenanceIssue(
          userId,
          inspectionId,
          routerProps.match.params.id,
          images
        )
      }
      {...{ maintenanceIssues }}
      {...routerProps}
    />
  )
}
