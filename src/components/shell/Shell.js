import React, { Component } from 'react'
import PropTypes from 'prop-types'
import NavBar from '../navBar'
import SideMenu from '../sideMenu'
import Routes from '../routes'
import Footer from '../footer'
import { StyledMainContent } from './StyledMainContent'

export class Shell extends Component {
  getChildContext() {
    return {
      disableNavBarShadow: this.disableNavBarShadow,
      enableNavBarShadow: this.enableNavBarShadow,
      setNavTitle: this.setNavTitle,
      removeNavTitle: this.removeNavTitle,
      setLeftNavComponent: this.setLeftNavComponent,
      removeLefNavComponent: this.removeLefNavComponent,
      setRightNavComponent: this.setRightNavComponent,
      removeRightNavComponent: this.removeRightNavComponent,
    }
  }

  state = {
    navTitle: null,
    leftNavComponent: null,
    rightNavComponent: null,
    navBarShadowEnabled: true,
  }

  setNavTitle = title => {
    this.setState({ navTitle: title })
  }

  removeNavTitle = title => {
    this.setState({ navTitle: null })
  }

  setLeftNavComponent = component => {
    this.setState({ leftNavComponent: component })
  }

  removeLefNavComponent = () => {
    this.setState({ leftNavComponent: null })
  }

  setRightNavComponent = component => {
    this.setState({ rightNavComponent: component })
  }

  removeRightNavComponent = () => {
    this.setState({ rightNavComponent: null })
  }

  disableNavBarShadow = () => {
    this.setState({ navBarShadowEnabled: false })
  }

  enableNavBarShadow = () => {
    this.setState({ navBarShadowEnabled: true })
  }

  render() {
    const {
      navTitle,
      leftNavComponent,
      rightNavComponent,
      navBarShadowEnabled,
    } = this.state

    return (
      <div>
        <NavBar
          title={navTitle}
          leftComponent={leftNavComponent}
          rightComponent={rightNavComponent}
          shadow={navBarShadowEnabled}
        />
        <SideMenu />
        <StyledMainContent>
          <Routes />
        </StyledMainContent>
        <Footer />
      </div>
    )
  }
}

Shell.childContextTypes = {
  setNavTitle: PropTypes.func,
  removeNavTitle: PropTypes.func,
  setLeftNavComponent: PropTypes.func,
  removeLefNavComponent: PropTypes.func,
  setRightNavComponent: PropTypes.func,
  removeRightNavComponent: PropTypes.func,
  disableNavBarShadow: PropTypes.func,
  enableNavBarShadow: PropTypes.func,
}
