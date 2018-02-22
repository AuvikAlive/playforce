import React from 'react'
import Button from 'material-ui/Button'
import ArrowDropDown from 'material-ui-icons/ArrowDropDown'
import Menu, { MenuItem } from 'material-ui/Menu'
import { StyledMenuLink } from './StyledMenuLink'

export const UserMenu = ({
  anchorEl,
  profile,
  openMenu,
  closeMenu,
  signOut
}) => (
  <div>
    <Button
      aria-owns={anchorEl ? 'simple-menu' : null}
      aria-haspopup="true"
      onClick={openMenu}
      style={{ color: 'white' }}
    >
      {profile.username}
      <ArrowDropDown />
    </Button>
    <Menu
      id="simple-menu"
      anchorEl={anchorEl}
      open={Boolean(anchorEl)}
      onClose={closeMenu}
    >
      <StyledMenuLink to="/settings" className="menu-link">
        <MenuItem onClick={closeMenu}>Settings</MenuItem>
      </StyledMenuLink>
      <MenuItem onClick={signOut}>Sign Out</MenuItem>
    </Menu>
  </div>
)
