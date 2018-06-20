import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { isLoaded } from 'react-redux-firebase'
import LinearProgress from '@material-ui/core/LinearProgress'
import Snackbar from '@material-ui/core/Snackbar'
import NavBar from '../navBar'
import SideMenu from '../sideMenu'
import Routes from '../routes'
import Footer from '../footer'
import { StyledMainContent } from '../styledMainContent/StyledMainContent'

export class Shell extends Component {
  getChildContext() {
    return {
      disableNavBarShadow: this.disableNavBarShadow,
      enableNavBarShadow: this.enableNavBarShadow,
      setNavColor: this.setNavColor,
      setNavTitle: this.setNavTitle,
      removeNavTitle: this.removeNavTitle,
      setLeftNavComponent: this.setComponent('leftNavComponent'),
      removeLefNavComponent: this.removeComponent('leftNavComponent'),
      setRightNavComponent: this.setComponent('rightNavComponent'),
      removeRightNavComponent: this.removeComponent('rightNavComponent'),
      setSearchComponent: this.setComponent('searchComponent'),
      setSearchOnTop: this.setSearchOnTop,
      setSearchOnBottom: this.setSearchOnBottom,
      removeSearchComponent: this.removeComponent('searchComponent'),
      openSnackbar: this.openSnackbar,
      closeSnackbar: this.closeSnackbar,
      addUnsubscriber: this.addUnsubscriber,
      clearSubscriptions: this.clearSubscriptions,
    }
  }

  state = {
    navBarShadowEnabled: true,
    navColor: undefined,
    navTitle: null,
    leftNavComponent: null,
    rightNavComponent: null,
    searchComponent: null,
    searchOnTop: true,
    snackbarOpen: false,
    snackbarAutoHideDuration: 2000,
    snackbarMessage: '',
    unsubscribers: [],
  }

  setNavTitle = title => this.setState({ navTitle: title })
  removeNavTitle = title => this.setState({ navTitle: null })
  setNavColor = navColor => this.setState({ navColor })
  disableNavBarShadow = () => this.setState({ navBarShadowEnabled: false })
  enableNavBarShadow = () => this.setState({ navBarShadowEnabled: true })
  setComponent = name => component => this.setState({ [name]: component })
  setSearchOnTop = () => this.setState({ searchOnTop: true })
  setSearchOnBottom = () => this.setState({ searchOnTop: false })
  removeComponent = name => () => this.setState({ [name]: null })
  openSnackbar = (snackbarAutoHideDuration, snackbarMessage) =>
    this.setState({
      snackbarOpen: true,
      snackbarAutoHideDuration,
      snackbarMessage,
    })
  closeSnackbar = () => this.setState({ snackbarOpen: false })
  addUnsubscriber = unsubscriber => {
    this.setState({
      unsubscribers: [...this.state.unsubscribers, unsubscriber],
    })
  }
  clearSubscriptions = () => {
    const { unsubscribers } = this.state

    unsubscribers.forEach(unsubscribe => unsubscribe())

    this.setState({ unsubscribers: [] })
  }

  render() {
    const {
      navBarShadowEnabled,
      navColor,
      navTitle,
      leftNavComponent,
      rightNavComponent,
      searchComponent,
      searchOnTop,
      snackbarOpen,
      snackbarAutoHideDuration,
      snackbarMessage,
    } = this.state

    const { auth, profile } = this.props

    return isLoaded(auth) && isLoaded(profile) ? (
      <div>
        <NavBar
          shadow={navBarShadowEnabled}
          color={navColor}
          title={navTitle}
          leftComponent={leftNavComponent}
          rightComponent={rightNavComponent}
          searchComponent={searchComponent}
          searchOnTop={searchOnTop}
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
  setNavColor: PropTypes.func,
  setNavTitle: PropTypes.func,
  removeNavTitle: PropTypes.func,
  setLeftNavComponent: PropTypes.func,
  removeLefNavComponent: PropTypes.func,
  setRightNavComponent: PropTypes.func,
  removeRightNavComponent: PropTypes.func,
  setSearchComponent: PropTypes.func,
  removeSearchComponent: PropTypes.func,
  setSearchOnTop: PropTypes.func,
  setSearchOnBottom: PropTypes.func,
  openSnackbar: PropTypes.func,
  closeSnackbar: PropTypes.func,
  addUnsubscriber: PropTypes.func,
  clearSubscriptions: PropTypes.func,
}
