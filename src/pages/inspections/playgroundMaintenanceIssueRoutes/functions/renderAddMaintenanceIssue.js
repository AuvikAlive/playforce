import React from 'react'
import Loadable from '../../../../components/loadable/LoadableLinear'

const AddMaintenanceIssue = Loadable({
  loader: () => import('../../addMaintenanceIssue'),
})

AddMaintenanceIssue.preload()

export const renderAddMaintenanceIssue = props => routerProps => {
  const {
    addPlaygroundMaintenanceIssue,
    userId,
    inspectionId,
    playgroundId,
  } = props

  return (
    <AddMaintenanceIssue
      addMaintenanceIssue={data =>
        addPlaygroundMaintenanceIssue(userId, inspectionId, playgroundId, data)
      }
      {...routerProps}
    />
  )
}
