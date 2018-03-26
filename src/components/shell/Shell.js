import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { LinearProgress } from 'material-ui/Progress'
import { isLoaded } from 'react-redux-firebase'
import NavBar from '../navBar'
import SideMenu from '../sideMenu'
import Routes from '../routes'
import Footer from '../footer'
import { StyledMainContent } from './StyledMainContent'

export class Shell extends Component {
  getChildContext() {
    return {
      setNavTitle: this.setNavTitle,
      removeNavTitle: this.removeNavTitle,
      setLeftNavComponent: this.setLeftNavComponent,
      removeLefNavComponent: this.removeLefNavComponent,
      setRightNavComponent: this.setRightNavComponent,
      removeRightNavComponent: this.removeRightNavComponent,
      setSearchComponent: this.setSearchComponent,
      removeSearchComponent: this.removeSearchComponent,
      disableNavBarShadow: this.disableNavBarShadow,
      enableNavBarShadow: this.enableNavBarShadow,
    }
  }

  state = {
    navTitle: null,
    leftNavComponent: null,
    rightNavComponent: null,
    searchComponent: null,
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

  setSearchComponent = component => {
    this.setState({ searchComponent: component })
  }

  removeSearchComponent = () => {
    this.setState({ searchComponent: null })
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
      searchComponent,
      navBarShadowEnabled,
    } = this.state

    const { auth, profile } = this.props

    return isLoaded(auth) && isLoaded(profile) ? (
      <div>
        <NavBar
          title={navTitle}
          leftComponent={leftNavComponent}
          rightComponent={rightNavComponent}
          searchComponent={searchComponent}
          shadow={navBarShadowEnabled}
        />
        <SideMenu />
        <StyledMainContent className="StyledMainContent">
          <Routes />
        </StyledMainContent>
        <Footer />
      </div>
    ) : (
      <LinearProgress />
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
  setSearchComponent: PropTypes.func,
  removeSearchComponent: PropTypes.func,
  disableNavBarShadow: PropTypes.func,
  enableNavBarShadow: PropTypes.func,
}
