import React, { Component } from 'react'
import IconButton from 'material-ui/IconButton'
import DeleteIcon from 'material-ui-icons/Delete'
import ArchiveIcon from 'material-ui-icons/Archive'
import UnarchiveIcon from 'material-ui-icons/Unarchive'
import MoreVertIcon from 'material-ui-icons/MoreVert'
import Menu, { MenuItem } from 'material-ui/Menu'

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

  exportComplianceIssues = () => {
    this.closeMenu()
    this.props.exportComplianceIssues()
  }

  render() {
    const {
      unarchive,
      archiveInspections,
      unarchiveInspections,
      deleteInspections,
    } = this.props
    const { menuAnchor } = this.state

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

        <IconButton color="inherit" aria-label="More" onClick={this.openMenu}>
          <MoreVertIcon aria-label="More" />
        </IconButton>

        <Menu
          anchorEl={menuAnchor}
          open={Boolean(menuAnchor)}
          onClose={this.closeMenu}
          MenuListProps={{ disablePadding: true }}
        >
          <MenuItem onClick={this.exportComplianceIssues}>
            Export Complinace Issues
          </MenuItem>
        </Menu>
      </div>
    )
  }
}
