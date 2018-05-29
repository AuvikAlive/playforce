import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Drawer from 'material-ui/Drawer'
import List from 'material-ui/List'
import { isEmpty } from 'react-redux-firebase'
import { PublicLinks } from './PublicLinks'
import UserView from './userView'
import { PrivateLinks } from './PrivateLinks'

class SideMenu extends Component {
  // state = { unlisten: '' }

  // componentDidMount() {
  //   const { history } = this.props

  //   const unlisten = history.listen(() => {
  //     this.closeSideMenuIfOpen()
  //   })

  //   this.setState({ unlisten })
  // }

  // componentWillUnmount() {
  //   this.closeSideMenuIfOpen()
  // }

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
    const { open, auth } = this.props

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
              <PrivateLinks signOut={this.signOut} />
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
