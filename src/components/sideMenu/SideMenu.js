import React, { Component } from 'react'
import Drawer from 'material-ui/Drawer'
import List, { ListItem, ListItemText } from 'material-ui/List'
import { isEmpty } from 'react-redux-firebase'
import Button from 'material-ui/Button'
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
        <List onClick={closeDrawer} style={{ marginTop: 48 }}>
          <StyledNavLink to="/">
            <ListItem button>
              <ListItemText primary="Home" />
            </ListItem>
          </StyledNavLink>
          <StyledNavLink to="/dashboard">
            <ListItem button>
              <ListItemText primary="Dashboard" />
            </ListItem>
          </StyledNavLink>
          <StyledNavLink to="/settings">
            <ListItem button>
              <ListItemText primary="Settings" />
            </ListItem>
          </StyledNavLink>
          <StyledNavLink to="/terms">
            <ListItem button>
              <ListItemText primary="Terms of Service" />
            </ListItem>
          </StyledNavLink>

          {isEmpty(auth) && (
            <StyledNavLink to="/signIn">
              <ListItem button>
                <ListItemText primary="Sign In" />
              </ListItem>
            </StyledNavLink>
          )}

          {isEmpty(auth) && (
            <StyledNavLink to="/signUp">
              <ListItem button>
                <Button variant="raised" color="secondary" fullWidth>
                  Try Free
                </Button>
              </ListItem>
            </StyledNavLink>
          )}

          {!isEmpty(auth) && (
            <ListItem button onClick={this.signOut}>
              <ListItemText primary="Sign Out" />
            </ListItem>
          )}
        </List>
      </Drawer>
    )
  }
}

export default SideMenu
