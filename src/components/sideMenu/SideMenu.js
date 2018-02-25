import React, { Component } from 'react'
import Drawer from 'material-ui/Drawer'
import List, { ListItem, ListItemText, ListItemIcon } from 'material-ui/List'
import DashboardIcon from 'material-ui-icons/Dashboard'
import AssignmentTurnedInIcon from 'material-ui-icons/AssignmentTurnedIn'
import LocationOnIcon from 'material-ui-icons/LocationOn'
import ArrowBackIcon from 'material-ui-icons/ArrowBack'
import SettingsIcon from 'material-ui-icons/Settings'
import HelpIcon from 'material-ui-icons/Help'
import Divider from 'material-ui/Divider'
import Button from 'material-ui/Button'
import { isEmpty } from 'react-redux-firebase'
import { StyledNavLink } from '../styledNavLink/StyledNavLink'

class SideMenu extends Component {
  state = { unlisten: '' }

  componentDidMount() {
    const { history, closeDrawer } = this.props

    const unlisten = history.listen(() => {
      closeDrawer()
    })

    this.setState({ unlisten })
  }

  componentWillUnmount() {
    this.props.closeDrawer()
    this.state.unlisten()
  }

  signOut = () => {
    const { firebase, history } = this.props

    firebase.logout()
    history.push('/signIn')
  }

  render() {
    const { open, closeDrawer, auth } = this.props

    return (
      <Drawer open={open} anchor={'left'} onClick={closeDrawer}>
        <List onClick={closeDrawer}>
          {isEmpty(auth) && (
            <div>
              <StyledNavLink to="/">
                <ListItem button>
                  <ListItemText primary="Home" />
                </ListItem>
              </StyledNavLink>
              <StyledNavLink to="/signIn">
                <ListItem button>
                  <ListItemText primary="Sign In" />
                </ListItem>
              </StyledNavLink>
              <StyledNavLink to="/signUp">
                <ListItem button>
                  <Button variant="raised" color="primary" fullWidth>
                    Try For Free
                  </Button>
                </ListItem>
              </StyledNavLink>
            </div>
          )}

          {!isEmpty(auth) && (
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
              <ListItem button onClick={this.signOut}>
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
          )}
        </List>
      </Drawer>
    )
  }
}

export default SideMenu
