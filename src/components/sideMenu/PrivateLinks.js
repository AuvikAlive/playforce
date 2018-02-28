import React from 'react'
import { ListItem, ListItemText, ListItemIcon } from 'material-ui/List'
import DashboardIcon from 'material-ui-icons/Dashboard'
import AssignmentTurnedInIcon from 'material-ui-icons/AssignmentTurnedIn'
import LocationOnIcon from 'material-ui-icons/LocationOn'
import ArrowBackIcon from 'material-ui-icons/ArrowBack'
import SettingsIcon from 'material-ui-icons/Settings'
import HelpIcon from 'material-ui-icons/Help'
import Divider from 'material-ui/Divider'
import UserView from './userView'
import { StyledLinks } from './StyledLinks'
import { StyledNavLink } from '../styledNavLink/StyledNavLink'

export const PrivateLinks = ({ signOut }) => (
  <StyledLinks>
    <UserView />
    <StyledNavLink
      to={{ pathname: '/Dashboard', state: { name: 'Dashboard' } }}
    >
      <ListItem button className="list-item">
        <ListItemIcon>
          <DashboardIcon />
        </ListItemIcon>
        <ListItemText primary="Dashboard" />
      </ListItem>
    </StyledNavLink>
    <StyledNavLink
      to={{ pathname: '/Inspections', state: { name: 'Inspections' } }}
    >
      <ListItem button className="list-item">
        <ListItemIcon>
          <AssignmentTurnedInIcon />
        </ListItemIcon>
        <ListItemText primary="Inspections" />
      </ListItem>
    </StyledNavLink>
    <StyledNavLink to={{ pathname: '/Sites', state: { name: 'Sites' } }}>
      <ListItem button className="list-item">
        <ListItemIcon>
          <LocationOnIcon />
        </ListItemIcon>
        <ListItemText primary="Sites" />
      </ListItem>
    </StyledNavLink>
    <ListItem button className="list-item" onClick={signOut}>
      <ListItemIcon>
        <ArrowBackIcon />
      </ListItemIcon>
      <ListItemText primary="Sign Out" />
    </ListItem>
    <Divider />
    <StyledNavLink to={{ pathname: '/Settings', state: { name: 'Settings' } }}>
      <ListItem button className="list-item">
        <ListItemIcon>
          <SettingsIcon />
        </ListItemIcon>
        <ListItemText primary="Settings" />
      </ListItem>
    </StyledNavLink>
    <StyledNavLink to={{ pathname: '/Help', state: { name: 'Help' } }}>
      <ListItem button className="list-item">
        <ListItemIcon>
          <HelpIcon />
        </ListItemIcon>
        <ListItemText primary="Help" />
      </ListItem>
    </StyledNavLink>
  </StyledLinks>
)
