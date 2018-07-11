import React, { Component } from 'react'
import IconButton from '@material-ui/core/IconButton'
import MoreVertIcon from '@material-ui/icons/MoreVert'
import Menu from '@material-ui/core/Menu'
import MenuItem from '@material-ui/core/MenuItem'
import { openMenu, closeMenu } from '../../../functions/'

export class SelectModeRightComponent extends Component {
  state = {
    menuAnchor: null,
  }

  render() {
    // const { deleteSites } = this.props
    const { menuAnchor } = this.state

    return (
      <div>
        {/* <IconButton color="inherit" aria-label="delete" onClick={deleteSites}>
          <DeleteIcon />
        </IconButton> */}

        <IconButton color="inherit" aria-label="More" onClick={openMenu(this)}>
          <MoreVertIcon aria-label="More" />
        </IconButton>

        <Menu
          anchorEl={menuAnchor}
          open={Boolean(menuAnchor)}
          onClose={closeMenu(this)}
          MenuListProps={{ disablePadding: true }}
        >
          <MenuItem onClick={closeMenu(this)}>Export</MenuItem>
        </Menu>
      </div>
    )
  }
}
