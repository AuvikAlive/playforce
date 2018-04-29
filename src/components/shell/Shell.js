import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { isLoaded } from 'react-redux-firebase'
import { LinearProgress } from 'material-ui/Progress'
import Snackbar from 'material-ui/Snackbar'
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
      setLeftNavComponent: this.setComponent('leftNavComponent'),
      removeLefNavComponent: this.removeComponent('leftNavComponent'),
      setRightNavComponent: this.setComponent('rightNavComponent'),
      removeRightNavComponent: this.removeComponent('rightNavComponent'),
      setSearchComponent: this.setComponent('searchComponent'),
      removeSearchComponent: this.removeComponent('searchComponent'),
      openSnackbar: this.openSnackbar,
      closeSnackbar: this.closeSnackbar,
    }
  }

  state = {
    navBarShadowEnabled: true,
    navTitle: null,
    leftNavComponent: null,
    rightNavComponent: null,
    searchComponent: null,
    snackbarOpen: false,
    snackbarAutoHideDuration: 2000,
    snackbarMessage: '',
  }

  setNavTitle = title => this.setState({ navTitle: title })
  removeNavTitle = title => this.setState({ navTitle: null })
  disableNavBarShadow = () => this.setState({ navBarShadowEnabled: false })
  enableNavBarShadow = () => this.setState({ navBarShadowEnabled: true })
  setComponent = name => component => this.setState({ [name]: component })
  removeComponent = name => () => this.setState({ [name]: null })
  openSnackbar = (snackbarAutoHideDuration, snackbarMessage) =>
    this.setState({
      snackbarOpen: true,
      snackbarAutoHideDuration,
      snackbarMessage,
    })
  closeSnackbar = () => this.setState({ snackbarOpen: false })

  render() {
    const {
      navBarShadowEnabled,
      navTitle,
      leftNavComponent,
      rightNavComponent,
      searchComponent,
      snackbarOpen,
      snackbarAutoHideDuration,
      snackbarMessage,
    } = this.state

    const { auth, profile } = this.props

    return isLoaded(auth) && isLoaded(profile) ? (
      <div>
        <NavBar
          shadow={navBarShadowEnabled}
          title={navTitle}
          leftComponent={leftNavComponent}
          rightComponent={rightNavComponent}
          searchComponent={searchComponent}
        />

        <SideMenu />

        <StyledMainContent className="StyledMainContent">
          <Routes />
        </StyledMainContent>

        <Snackbar
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'left',
          }}
          open={snackbarOpen}
          autoHideDuration={snackbarAutoHideDuration}
          onClose={this.closeSnackbar}
          message={<span id="message-id">{snackbarMessage}</span>}
        />

        <Footer />
      </div>
    ) : (
      <LinearProgress />
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
  setSearchComponent: PropTypes.func,
  removeSearchComponent: PropTypes.func,
  openSnackbar: PropTypes.func,
  closeSnackbar: PropTypes.func,
}
