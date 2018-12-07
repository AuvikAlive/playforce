import React from "react"
import { Provider } from "react-redux"
import { ConnectedRouter } from "react-router-redux"
import { MuiThemeProvider } from "@material-ui/core/styles"
import { ThemeProvider } from "styled-components"
import DateFnsUtils from "material-ui-pickers/utils/date-fns-utils"
import { MuiPickersUtilsProvider } from "material-ui-pickers"
import { store, history } from "../../store/store"
import { theme } from "../../constants/theme"
import Shell from "../shell"
import { NavContextProvider } from "../NavContextProvider/"

const App = () => (
  <Provider store={store}>
    <NavContextProvider>
      <MuiThemeProvider theme={theme}>
        <ThemeProvider theme={theme}>
          <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <ConnectedRouter history={history}>
              <div className="App">
                <Shell />
              </div>
            </ConnectedRouter>
          </MuiPickersUtilsProvider>
        </ThemeProvider>
      </MuiThemeProvider>
    </NavContextProvider>
  </Provider>
)

export default App
