import React, { Component } from 'react'
import NavBar from '../navBar/NavBarContainer'
import SideMenu from '../sideMenu/SideMenuContainer'
// import Media from 'react-media'

export class Shell extends Component {
  state = { drawerOpen: false }

  openDrawer = () => {
    this.setState({ drawerOpen: true })
  }

  closeDrawer = () => {
    this.setState({ drawerOpen: false })
  }

  toggleDrawer = () => {
    this.setState({ drawerOpen: !this.state.drawerOpen })
  }

  render() {
    const { drawerOpen } = this.state

    return (
      <div>
        <NavBar toggleDrawer={this.toggleDrawer} />
        {/* <Media
          query="(orientation: portrait)"
          render={() => (
            <SideMenu open={drawerOpen} closeDrawer={this.closeDrawer} />
          )}
        /> */}
        <SideMenu open={drawerOpen} closeDrawer={this.closeDrawer} />
      </div>
    )
  }
}
