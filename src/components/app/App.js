import React from 'react'
import { PersistGate } from 'redux-persist/es/integration/react'
import { Provider } from 'react-redux'
import { ConnectedRouter } from 'react-router-redux'
import { MuiThemeProvider } from 'material-ui/styles'
import { ThemeProvider } from 'styled-components'
import { store, history, persistor } from '../../store/store'
import { Routes } from './Routes'
import { theme } from './theme'

const App = () => (
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <ConnectedRouter history={history}>
        <MuiThemeProvider theme={theme}>
          <ThemeProvider theme={theme}>
            <div className="App">
              <Routes />
            </div>
          </ThemeProvider>
        </MuiThemeProvider>
      </ConnectedRouter>
    </PersistGate>
  </Provider>
)

export default App
