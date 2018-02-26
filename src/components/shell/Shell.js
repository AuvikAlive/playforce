import React from 'react'
import NavBar from '../navBar'
import SideMenu from '../sideMenu'
import Routes from '../routes'
import { Footer } from '../footer/Footer'
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
    <Footer />
  </div>
)
