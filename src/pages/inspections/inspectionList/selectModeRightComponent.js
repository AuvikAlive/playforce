import React, { Component } from 'react'
import IconButton from '@material-ui/core/IconButton'
import DeleteIcon from '@material-ui/icons/Delete'
import MoreVertIcon from '@material-ui/icons/MoreVert'
import Menu from '@material-ui/core/Menu'
import MenuItem from '@material-ui/core/MenuItem'

export class SelectModeRightComponent extends Component {
  state = {
    menuAnchor: null,
  }

  openMenu = event => {
    this.setState({ menuAnchor: event.currentTarget })
  }

  closeMenu = () => {
    this.setState({ menuAnchor: null })
  }

  archiveInspections = () => {
    this.closeMenu()
    this.props.archiveInspections()
  }

  unarchiveInspections = () => {
    this.closeMenu()
    this.props.unarchiveInspections()
  }

  exportComplianceIssues = () => {
    this.closeMenu()
    this.props.exportComplianceIssues()
  }

  exportMaintenanceIssues = () => {
    this.closeMenu()
    this.props.exportMaintenanceIssues()
  }

  render() {
    const { unarchive, deleteInspections } = this.props
    const { menuAnchor } = this.state

    return (
      <div>
        <IconButton
          color="inherit"
          aria-label="delete"
          onClick={deleteInspections}
        >
          <DeleteIcon />
        </IconButton>

        <IconButton color="inherit" aria-label="More" onClick={this.openMenu}>
          <MoreVertIcon aria-label="More" />
        </IconButton>

        <Menu
          anchorEl={menuAnchor}
          open={Boolean(menuAnchor)}
          onClose={this.closeMenu}
          MenuListProps={{ disablePadding: true }}
        >
          <MenuItem onClick={this.archiveInspections}>Archive</MenuItem>

          {unarchive && (
            <MenuItem onClick={this.unarchiveInspections}>Unarchive</MenuItem>
          )}

          <MenuItem onClick={this.exportComplianceIssues}>
            Export Compliance Issues
          </MenuItem>

          <MenuItem onClick={this.exportMaintenanceIssues}>
            Export Maintenance Issues
          </MenuItem>
        </Menu>
      </div>
    )
  }
}
