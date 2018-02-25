import React, { Component } from 'react'
import Drawer from 'material-ui/Drawer'
import List from 'material-ui/List'
import { isEmpty } from 'react-redux-firebase'
import { PublicLinks } from './PublicLinks'
import { PrivateLinks } from './PrivateLinks'

class SideMenu extends Component {
  state = { unlisten: '' }

  componentDidMount() {
    const { history, closeSideMenu } = this.props

    const unlisten = history.listen(() => {
      closeSideMenu()
    })

    this.setState({ unlisten })
  }

  componentWillUnmount() {
    this.props.closeSideMenu()
    this.state.unlisten()
  }

  signOut = () => {
    const { firebase, history } = this.props

    firebase.logout()
    history.push('/signIn')
  }

  render() {
    const { open, closeSideMenu, auth } = this.props

    return (
      <Drawer open={open} anchor={'left'} onClick={closeSideMenu}>
        <List onClick={closeSideMenu} style={{ width: 300, paddingTop: 0 }}>
          {isEmpty(auth) ? (
            <PublicLinks />
          ) : (
            <PrivateLinks signOut={this.signOut} />
          )}
        </List>
      </Drawer>
    )
  }
}

export default SideMenu
