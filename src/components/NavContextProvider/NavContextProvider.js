import React, { Component, createContext } from "react"
import Button from "@material-ui/core/Button"
import registerServiceWorker from "../../myServiceWorker"
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
} from "./functions/"

export const NavContext = createContext({})

export class NavContextProvider extends Component {
  state = {
    navBarShadowEnabled: true,
    navColor: undefined,
    navTitle: null,
    leftNavComponent: null,
    rightNavComponent: null,
    bottomNavComponent: null,
    searchComponent: null,
    searchOnTop: true,
    snackbarOpen: false,
    snackbarAutoHideDuration: 2000,
    snackbarMessage: "",
    snackbarAction: null,
    unsubscribers: [],
    enableNavBarShadow: enableNavBarShadow(this),
    disableNavBarShadow: disableNavBarShadow(this),
    setNavColor: setNavColor(this),
    setNavTitle: setNavTitle(this),
    removeNavTitle: removeNavTitle(this),
    setLeftNavComponent: setComponent(this, "leftNavComponent"),
    removeLefNavComponent: removeComponent(this, "leftNavComponent"),
    setRightNavComponent: setComponent(this, "rightNavComponent"),
    removeRightNavComponent: removeComponent(this, "rightNavComponent"),
    setBottomNavComponent: setComponent(this, "bottomNavComponent"),
    removeBottomNavComponent: removeComponent(this, "bottomNavComponent"),
    setSearchComponent: setComponent(this, "searchComponent"),
    removeSearchComponent: removeComponent(this, "searchComponent"),
    setSearchOnTop: setSearchOnTop(this),
    setSearchOnBottom: setSearchOnBottom(this),
    openSnackbar: openSnackbar(this),
    closeSnackbar: closeSnackbar(this),
    addUnsubscriber: addUnsubscriber(this),
    clearSubscriptions: clearSubscriptions(this),
  }

  componentDidMount() {
    registerServiceWorker(() =>
      openSnackbar(this)(
        7000,
        "App update is available.",
        <Button
          color="secondary"
          size="small"
          onClick={() => window.location.reload(true)}
        >
          click to update
        </Button>
      )
    )
  }

  render() {
    return (
      <NavContext.Provider value={this.state}>
        {this.props.children}
      </NavContext.Provider>
    )
  }
}

export const NavContextConsumer = NavContext.Consumer
