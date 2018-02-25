import React from 'react'
import { ListItem, ListItemText, ListItemIcon } from 'material-ui/List'
import DashboardIcon from 'material-ui-icons/Dashboard'
import AssignmentTurnedInIcon from 'material-ui-icons/AssignmentTurnedIn'
import LocationOnIcon from 'material-ui-icons/LocationOn'
import ArrowBackIcon from 'material-ui-icons/ArrowBack'
import SettingsIcon from 'material-ui-icons/Settings'
import HelpIcon from 'material-ui-icons/Help'
import Divider from 'material-ui/Divider'
import { StyledNavLink } from '../styledNavLink/StyledNavLink'

export const PrivateLinks = ({ signOut }) => (
  <div>
    <StyledNavLink to="/dashboard">
      <ListItem button>
        <ListItemIcon>
          <DashboardIcon />
        </ListItemIcon>
        <ListItemText primary="Dashboard" />
      </ListItem>
    </StyledNavLink>
    <StyledNavLink to="/inspections">
      <ListItem button>
        <ListItemIcon>
          <AssignmentTurnedInIcon />
        </ListItemIcon>
        <ListItemText primary="Inspections" />
      </ListItem>
    </StyledNavLink>
    <StyledNavLink to="/sites">
      <ListItem button>
        <ListItemIcon>
          <LocationOnIcon />
        </ListItemIcon>
        <ListItemText primary="Sites" />
      </ListItem>
    </StyledNavLink>
    <ListItem button onClick={signOut}>
      <ListItemIcon>
        <ArrowBackIcon />
      </ListItemIcon>
      <ListItemText primary="Sign Out" />
    </ListItem>
    <Divider />
    <StyledNavLink to="/settings">
      <ListItem button>
        <ListItemIcon>
          <SettingsIcon />
        </ListItemIcon>
        <ListItemText primary="Settings" />
      </ListItem>
    </StyledNavLink>
    <StyledNavLink to="/terms">
      <ListItem button>
        <ListItemIcon>
          <HelpIcon />
        </ListItemIcon>
        <ListItemText primary="Help" />
      </ListItem>
    </StyledNavLink>
  </div>
)
