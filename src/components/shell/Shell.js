import React from "react"
import { isLoaded } from "react-redux-firebase"
import Snackbar from "@material-ui/core/Snackbar"
import { NavContextConsumer } from "../NavContextProvider/"
import NavBar from "../navBar"
import SideMenu from "../sideMenu"
import Routes from "../routes"
import Footer from "../footer"
import { StyledMainContent } from "../styledMainContent/StyledMainContent"
import { StyledShell } from "./StyledShell"

export const Shell = ({ auth, profile }) => {
  const dataIsLoaded = isLoaded(auth) && isLoaded(profile)

  return (
    <NavContextConsumer>
      {({
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
        closeSnackbar,
      }) => (
        <StyledShell className="StyledShell">
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
            {dataIsLoaded && <Routes />}
          </StyledMainContent>

          <Footer />

          <Snackbar
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "left",
            }}
            open={snackbarOpen}
            autoHideDuration={snackbarAutoHideDuration}
            onClose={closeSnackbar}
            message={<span id="message-id">{snackbarMessage}</span>}
            action={snackbarAction}
          />
        </StyledShell>
      )}
    </NavContextConsumer>
  )
}
