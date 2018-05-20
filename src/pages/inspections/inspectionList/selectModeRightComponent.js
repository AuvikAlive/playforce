import React from 'react'
import IconButton from 'material-ui/IconButton'
import DeleteIcon from 'material-ui-icons/Delete'
import ArchiveIcon from 'material-ui-icons/Archive'
import UnarchiveIcon from 'material-ui-icons/Unarchive'

export const SelectModeRightComponent = ({
  unarchive,
  archiveInspections,
  unarchiveInspections,
  deleteInspections,
}) => {
  return (
    <div>
      {unarchive ? (
        <IconButton
          color="inherit"
          aria-label="unarchive"
          onClick={unarchiveInspections}
        >
          <UnarchiveIcon />
        </IconButton>
      ) : (
        <IconButton
          color="inherit"
          aria-label="archive"
          onClick={archiveInspections}
        >
          <ArchiveIcon />
        </IconButton>
      )}

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
