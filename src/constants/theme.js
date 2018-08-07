import { createMuiTheme } from '@material-ui/core/styles'
// import blue from '@material-ui/core/colors/blue'
// import yellow from '@material-ui/core/colors/yellow'
import green from '@material-ui/core/colors/green'

export const theme = createMuiTheme({
  palette: {
    primary: { light: '#4A6572', main: '#344955', dark: '#232F34' },
    secondary: { main: '#F9AA33' },
    success: green[500],
  },
  lanscapeWidth: '33.33vw',
})
