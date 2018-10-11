import React from 'react'
import Loadable from '../../../../components/loadable/LoadableLinear'

const AddMaintenanceIssue = Loadable({
  loader: () => import('../../addMaintenanceIssue'),
})

// AddMaintenanceIssue.preload()

export const renderAddMaintenanceIssue = ({ props }) => routerProps => {
  const { addMaintenanceIssue, userId, inspectionId } = props

  return (
    <AddMaintenanceIssue
      addMaintenanceIssue={data =>
        addMaintenanceIssue(userId, inspectionId, data)
      }
      {...routerProps}
    />
  )
}
