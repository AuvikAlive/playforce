import React, { Component } from 'react'
import IconButton from '@material-ui/core/IconButton'
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

  exportCSV = () => {
    this.closeMenu()
  }

  render() {
    // const { deleteSites } = this.props
    const { menuAnchor } = this.state

    return (
      <div>
        {/* <IconButton color="inherit" aria-label="delete" onClick={deleteSites}>
          <DeleteIcon />
        </IconButton> */}

        <IconButton color="inherit" aria-label="More" onClick={this.openMenu}>
          <MoreVertIcon aria-label="More" />
        </IconButton>

        <Menu
          anchorEl={menuAnchor}
          open={Boolean(menuAnchor)}
          onClose={this.closeMenu}
          MenuListProps={{ disablePadding: true }}
        >
          <MenuItem onClick={this.exportCSV}>Export</MenuItem>
        </Menu>
      </div>
    )
  }
}
