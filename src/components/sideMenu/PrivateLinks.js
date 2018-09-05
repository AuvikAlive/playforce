import React from 'react'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import DashboardIcon from '@material-ui/icons/Dashboard'
import AssignmentTurnedInIcon from '@material-ui/icons/AssignmentTurnedIn'
import LocationOnIcon from '@material-ui/icons/LocationOn'
import GroupIcon from '@material-ui/icons/Group'
import FolderIcon from '@material-ui/icons/Folder'
import BuildIcon from '@material-ui/icons/Build'
import ArrowBackIcon from '@material-ui/icons/ArrowBack'
import SettingsIcon from '@material-ui/icons/Settings'
import HelpIcon from '@material-ui/icons/Help'
import Divider from '@material-ui/core/Divider'
import { StyledLinks } from './StyledLinks'
import { StyledNavLink } from '../styledNavLink/StyledNavLink'

export const PrivateLinks = ({ role, signOut }) => (
  <StyledLinks>
    <StyledNavLink to="/dashboard">
      <ListItem button className="list-item">
        <ListItemIcon>
          <DashboardIcon />
        </ListItemIcon>
        <ListItemText primary="Dashboard" />
      </ListItem>
    </StyledNavLink>

    <StyledNavLink to="/inspections">
      <ListItem button className="list-item">
        <ListItemIcon>
          <AssignmentTurnedInIcon />
        </ListItemIcon>
        <ListItemText primary="Inspections" />
      </ListItem>
    </StyledNavLink>

    <StyledNavLink to="/sites">
      <ListItem button className="list-item">
        <ListItemIcon>
          <LocationOnIcon />
        </ListItemIcon>
        <ListItemText primary="Sites" />
      </ListItem>
    </StyledNavLink>

    {role === 'admin' && (
      <StyledNavLink to="/groups">
        <ListItem button className="list-item">
          <ListItemIcon>
            <GroupIcon />
          </ListItemIcon>
          <ListItemText primary="Groups" />
        </ListItem>
      </StyledNavLink>
    )}

    <StyledNavLink to="/projects">
      <ListItem button className="list-item">
        <ListItemIcon>
          <FolderIcon />
        </ListItemIcon>
        <ListItemText primary="Projects" />
      </ListItem>
    </StyledNavLink>

    <StyledNavLink to="/tools">
      <ListItem button className="list-item">
        <ListItemIcon>
          <BuildIcon />
        </ListItemIcon>
        <ListItemText primary="Tools" />
      </ListItem>
    </StyledNavLink>

    <ListItem button className="list-item" onClick={signOut}>
      <ListItemIcon>
        <ArrowBackIcon />
      </ListItemIcon>
      <ListItemText primary="Sign Out" />
    </ListItem>

    <Divider />

    <StyledNavLink to="/settings">
      <ListItem button className="list-item">
        <ListItemIcon>
          <SettingsIcon />
        </ListItemIcon>
        <ListItemText primary="Settings" />
      </ListItem>
    </StyledNavLink>

    <StyledNavLink to="/help">
      <ListItem button className="list-item">
        <ListItemIcon>
          <HelpIcon />
        </ListItemIcon>
        <ListItemText primary="Help" />
      </ListItem>
    </StyledNavLink>
  </StyledLinks>
)
