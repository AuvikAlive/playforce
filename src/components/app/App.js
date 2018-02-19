import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles'
import { Routes } from './Routes'
import pink from 'material-ui/colors/pink'

const theme = createMuiTheme({
  palette: {
    secondary: { main: pink[700] }
  }
})

const App = () => (
  <Router>
    <MuiThemeProvider theme={theme}>
      <div className="App">
        <Routes />
      </div>
    </MuiThemeProvider>
  </Router>
)

export default App
