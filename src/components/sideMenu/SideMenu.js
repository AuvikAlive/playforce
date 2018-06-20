import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Drawer from '@material-ui/core/Drawer'
import List from '@material-ui/core/List'
import { isEmpty } from 'react-redux-firebase'
import { PublicLinks } from './PublicLinks'
import UserView from './userView'
import { PrivateLinks } from './PrivateLinks'

class SideMenu extends Component {
  closeSideMenuIfOpen = () => {
    const { open, closeSideMenu } = this.props
    open && closeSideMenu()
  }

  signOut = () => {
    const { firebase, history } = this.props
    const { clearSubscriptions } = this.context

    clearSubscriptions()

    firebase.logout()
    history.push('/signIn')
  }

  render() {
    const { open, auth, role } = this.props

    return (
      <Drawer open={open} anchor={'left'} onClick={this.closeSideMenuIfOpen}>
        {isEmpty(auth) ? (
          <List onClick={this.closeSideMenuIfOpen} style={{ width: 300 }}>
            <PublicLinks />
          </List>
        ) : (
          <div>
            <UserView />
            <List onClick={this.closeSideMenuIfOpen} style={{ width: 300 }}>
              <PrivateLinks role={role} signOut={this.signOut} />
            </List>
          </div>
        )}
      </Drawer>
    )
  }
}

export default SideMenu

SideMenu.contextTypes = {
  clearSubscriptions: PropTypes.func,
}
