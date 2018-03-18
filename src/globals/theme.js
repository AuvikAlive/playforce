import { createMuiTheme } from 'material-ui/styles'
import blue from 'material-ui/colors/blue'
import yellow from 'material-ui/colors/yellow'
import green from 'material-ui/colors/green'

export const theme = createMuiTheme({
  palette: {
    primary: { main: blue[600] },
    secondary: { main: yellow[700] },
    success: green[500],
  },
})
