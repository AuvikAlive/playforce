import React, { Component } from 'react'
import IconButton from '@material-ui/core/IconButton'
import DeleteIcon from '@material-ui/icons/Delete'
import MoreVertIcon from '@material-ui/icons/MoreVert'
import Menu from '@material-ui/core/Menu'
import MenuItem from '@material-ui/core/MenuItem'
import { openMenu, closeMenu } from '../../../../functions/'
import {
  archiveInspections,
  unarchiveInspections,
  exportComplianceIssues,
  exportMaintenanceIssues,
  deleteInspections,
} from '../functions/'

export class SelectRightComponent extends Component {
  state = {
    menuAnchor: null,
  }

  render() {
    const { unarchive, openDialog } = this.props
    const { menuAnchor } = this.state

    return (
      <div>
        <IconButton
          color="inherit"
          aria-label="delete"
          onClick={() =>
            openDialog(deleteInspections(this), 'Delete these items?')
          }
        >
          <DeleteIcon />
        </IconButton>

        <IconButton color="inherit" aria-label="More" onClick={openMenu(this)}>
          <MoreVertIcon aria-label="More" />
        </IconButton>

        <Menu
          anchorEl={menuAnchor}
          open={Boolean(menuAnchor)}
          onClose={closeMenu(this)}
          MenuListProps={{ disablePadding: true }}
        >
          <MenuItem onClick={archiveInspections(this)}>Archive</MenuItem>

          {unarchive && (
            <MenuItem onClick={unarchiveInspections(this)}>Unarchive</MenuItem>
          )}

          <MenuItem onClick={exportComplianceIssues(this)}>
            Export Compliance Issues
          </MenuItem>

          <MenuItem onClick={exportMaintenanceIssues(this)}>
            Export Maintenance Issues
          </MenuItem>
        </Menu>
      </div>
    )
  }
}
