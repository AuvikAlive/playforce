import React, { Component } from 'react'
import Drawer from 'material-ui/Drawer'
import List from 'material-ui/List'
import { isEmpty } from 'react-redux-firebase'
import { PublicLinks } from './PublicLinks'
import { PrivateLinks } from './PrivateLinks'

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
