import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import Drawer from 'material-ui/Drawer'
import List, { ListItem, ListItemText } from 'material-ui/List'
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
  render() {
    const { open, closeDrawer } = this.props

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
        </List>
      </Drawer>
    )
  }
}

export default withRouter(SideMenu)
