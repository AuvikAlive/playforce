import React from 'react'
import { PersistGate } from 'redux-persist/es/integration/react'
import { Provider } from 'react-redux'
import { ConnectedRouter } from 'react-router-redux'
import { MuiThemeProvider } from '@material-ui/core/styles'
import { ThemeProvider } from 'styled-components'
import DateFnsUtils from 'material-ui-pickers/utils/date-fns-utils'
import MuiPickersUtilsProvider from 'material-ui-pickers/utils/MuiPickersUtilsProvider'
import { store, history, persistor } from '../../store/store'
import LinearProgress from '@material-ui/core/LinearProgress'
import { theme } from '../../constants/theme'
import Shell from '../shell'

const App = () => (
  <Provider store={store}>
    <MuiThemeProvider theme={theme}>
      <PersistGate loading={<LinearProgress />} persistor={persistor}>
        <ThemeProvider theme={theme}>
          <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <ConnectedRouter history={history}>
              <div className="App">
                <Shell />
              </div>
            </ConnectedRouter>
          </MuiPickersUtilsProvider>
        </ThemeProvider>
      </PersistGate>
    </MuiThemeProvider>
  </Provider>
)

export default App
