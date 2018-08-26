import React from 'react'
import Loadable from '../../../../components/loadable/LoadableLinear'

const EditMaintenanceIssue = Loadable({
  loader: () => import('../../editMaintenanceIssue'),
})

EditMaintenanceIssue.preload()

export const renderEditMaintenanceIssue = props => routerProps => {
  const {
    playground: { maintenanceIssues },
    updatePlaygroundMaintenanceIssue,
    deletePlaygroundMaintenanceIssue,
    userId,
    inspectionId,
    playgroundId,
  } = props

  return (
    <EditMaintenanceIssue
      updateMaintenanceIssue={data =>
        updatePlaygroundMaintenanceIssue({
          userId,
          inspectionId,
          playgroundId,
          id: routerProps.match.params.id,
          data,
        })
      }
      deleteMaintenanceIssue={images =>
        deletePlaygroundMaintenanceIssue({
          userId,
          inspectionId,
          playgroundId,
          id: routerProps.match.params.id,
          images,
        })
      }
      {...{ maintenanceIssues }}
      {...routerProps}
    />
  )
}
