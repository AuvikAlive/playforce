import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Drawer from '@material-ui/core/Drawer'
import List from '@material-ui/core/List'
import { isEmpty } from 'react-redux-firebase'
import { PublicLinks } from './PublicLinks'
import UserView from './userView'
import { PrivateLinks } from './PrivateLinks'
import { closeSideMenuIfOpen, signOut } from './functions/'

class SideMenu extends Component {
  render() {
    const { open, auth, role } = this.props

    return (
      <Drawer open={open} anchor={'left'} onClick={closeSideMenuIfOpen(this)}>
        {isEmpty(auth) ? (
          <List onClick={closeSideMenuIfOpen(this)} style={{ width: 300 }}>
            <PublicLinks />
          </List>
        ) : (
          <div>
            <UserView />
            <List onClick={closeSideMenuIfOpen(this)} style={{ width: 300 }}>
              <PrivateLinks role={role} signOut={signOut(this)} />
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
