import React from 'react'
import IconButton from 'material-ui/IconButton'
import DeleteIcon from 'material-ui-icons/Delete'
import ArchiveIcon from 'material-ui-icons/Archive'

export const SelectModeRightComponent = ({
  archiveInspections,
  deleteInspections,
}) => {
  return (
    <div>
      <IconButton
        color="inherit"
        aria-label="archive"
        onClick={archiveInspections}
      >
        <ArchiveIcon />
      </IconButton>

      <IconButton
        color="inherit"
        aria-label="delete"
        onClick={deleteInspections}
      >
        <DeleteIcon />
      </IconButton>
    </div>
  )
}
