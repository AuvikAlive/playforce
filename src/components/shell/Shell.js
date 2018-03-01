import React, { Component } from 'react'
import PropTypes from 'prop-types'
import NavBar from '../navBar'
import SideMenu from '../sideMenu'
import { Footer } from '../footer/Footer'
import Routes from '../routes'
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
    bottomNavComponent: null,
    navBarShadowEnabled: true,
  }

  disableNavBarShadow = () => {
    this.setState({ navBarShadowEnabled: false })
  }

  enableNavBarShadow = () => {
    this.setState({ navBarShadowEnabled: true })
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

  setBottomNavComponent = component => {
    this.setState({ bottomNavComponent: component })
  }

  removeBottomNavComponent = () => {
    this.setState({ bottomNavComponent: null })
  }

  render() {
    const {
      navTitle,
      leftNavComponent,
      rightNavComponent,
      bottomNavComponent,
      navBarShadowEnabled,
    } = this.state

    return (
      <div>
        <NavBar
          title={navTitle}
          leftComponent={leftNavComponent}
          rightComponent={rightNavComponent}
          bottomComponent={bottomNavComponent}
          shadow={navBarShadowEnabled}
        />
        <SideMenu />
        <StyledMainContent>
          <Routes
            setNavTitle={this.setNavTitle}
            removeNavTitle={this.removeNavTitle}
            setLeftNavComponent={this.setLeftNavComponent}
            removeLefNavComponent={this.removeLefNavComponent}
            setRightNavComponent={this.setRightNavComponent}
            removeRightNavComponent={this.removeRightNavComponent}
            setBottomNavComponent={this.setBottomNavComponent}
            removeBottomNavComponent={this.removeBottomNavComponent}
            disableNavBarShadow={this.disableNavBarShadow}
            enableNavBarShadow={this.enableNavBarShadow}
          />
        </StyledMainContent>
        <Footer />
      </div>
    )
  }
}

Shell.childContextTypes = {
  disableNavBarShadow: PropTypes.func,
  enableNavBarShadow: PropTypes.func,
  setNavTitle: PropTypes.func,
  removeNavTitle: PropTypes.func,
  setLeftNavComponent: PropTypes.func,
  removeLefNavComponent: PropTypes.func,
  setRightNavComponent: PropTypes.func,
  removeRightNavComponent: PropTypes.func,
}
