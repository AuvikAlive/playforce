import React, { Component } from 'react'
import { isLoaded } from 'react-redux-firebase'
import Snackbar from '@material-ui/core/Snackbar'
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
} from './functions/'
import { state, childContextTypes } from './constants/'

export class Shell extends Component {
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

  state = state

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
    const dataIsLoaded = isLoaded(auth) && isLoaded(profile)

    return showContentWhenLoaded(
      dataIsLoaded,
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
        />
      </div>
    )
  }
}

Shell.childContextTypes = childContextTypes
