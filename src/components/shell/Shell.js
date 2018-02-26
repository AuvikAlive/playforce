import React from 'react'
import NavBar from '../navBar'
import SideMenu from '../sideMenu'
import Routes from '../routes'
import { Footer } from '../footer/Footer'
// import Media from 'react-media'

export const Shell = () => (
  <div>
    <NavBar />
    <SideMenu />
    <Routes />
    <Footer />
  </div>
)
