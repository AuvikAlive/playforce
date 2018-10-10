import React, { Component } from 'react'
import { isLoaded } from 'react-redux-firebase'
import Snackbar from '@material-ui/core/Snackbar'
import Button from '@material-ui/core/Button'
import registerServiceWorker from '../../myServiceWorker'
import { showContentWhenLoaded } from '../../functions/'
import NavBar from '../navBar'
import SideMenu from '../sideMenu'
import Routes from '../routes'
import Footer from '../footer'
import { StyledMainContent } from '../styledMainContent/StyledMainContent'
import {
  enableNavBarShadow,
  disableNavBarShadow,
  setNavTitle,
  removeNavTitle,
  setNavColor,
  setComponent,
  removeComponent,
  setSearchOnTop,
  setSearchOnBottom,
  openSnackbar,
  closeSnackbar,
  addUnsubscriber,
  clearSubscriptions,
  promptUpdate,
} from './functions/'
import { state, childContextTypes } from './constants/'
import { StyledShell } from './StyledShell'

export class Shell extends Component {
  state = state

  getChildContext() {
    return {
      enableNavBarShadow: enableNavBarShadow(this),
      disableNavBarShadow: disableNavBarShadow(this),
      setNavColor: setNavColor(this),
      setNavTitle: setNavTitle(this),
      removeNavTitle: removeNavTitle(this),
      setLeftNavComponent: setComponent(this, 'leftNavComponent'),
      removeLefNavComponent: removeComponent(this, 'leftNavComponent'),
      setRightNavComponent: setComponent(this, 'rightNavComponent'),
      removeRightNavComponent: removeComponent(this, 'rightNavComponent'),
      setBottomNavComponent: setComponent(this, 'bottomNavComponent'),
      removeBottomNavComponent: removeComponent(this, 'bottomNavComponent'),
      setSearchComponent: setComponent(this, 'searchComponent'),
      removeSearchComponent: removeComponent(this, 'searchComponent'),
      setSearchOnTop: setSearchOnTop(this),
      setSearchOnBottom: setSearchOnBottom(this),
      openSnackbar: openSnackbar(this),
      closeSnackbar: closeSnackbar(this),
      addUnsubscriber: addUnsubscriber(this),
      clearSubscriptions: clearSubscriptions(this),
    }
  }

  componentDidMount() {
    registerServiceWorker(() => promptUpdate(this))

    // promptUpdate(this)
  }

  render() {
    const {
      navBarShadowEnabled,
      navColor,
      navTitle,
      leftNavComponent,
      rightNavComponent,
      bottomNavComponent,
      searchComponent,
      searchOnTop,
      snackbarOpen,
      snackbarAutoHideDuration,
      snackbarMessage,
      snackbarAction,
    } = this.state

    const { auth, profile } = this.props
    const dataIsLoaded = isLoaded(auth) && isLoaded(profile)

    return showContentWhenLoaded(
      dataIsLoaded,
      <StyledShell>
        <NavBar
          shadow={navBarShadowEnabled}
          color={navColor}
          title={navTitle}
          leftComponent={leftNavComponent}
          rightComponent={rightNavComponent}
          bottomComponent={bottomNavComponent}
          searchComponent={searchComponent}
          searchOnTop={searchOnTop}
        />

        <SideMenu />

        <StyledMainContent className="StyledMainContent">
          <Routes />
        </StyledMainContent>

        <Footer />

        <Snackbar
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'left',
          }}
          open={snackbarOpen}
          autoHideDuration={snackbarAutoHideDuration}
          onClose={closeSnackbar(this)}
          message={<span id="message-id">{snackbarMessage}</span>}
          action={snackbarAction}
        />
      </StyledShell>
    )
  }
}

Shell.childContextTypes = childContextTypes
