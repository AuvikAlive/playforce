import React from 'react'
import NavBar from '../navBar/NavBarContainer'
import SideMenu from '../sideMenu'
import Routes from '../routes'
// import Media from 'react-media'

export const Shell = () => (
  <div>
    <NavBar />
    {/* <Media
          query="(orientation: portrait)"
          render={() => (
            <SideMenu open={drawerOpen} closeDrawer={this.closeDrawer} />
          )}
        /> */}
    <SideMenu />
    <Routes />
  </div>
)
