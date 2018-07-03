import { createMuiTheme } from '@material-ui/core/styles'
import blue from '@material-ui/core/colors/blue'
import yellow from '@material-ui/core/colors/yellow'
import green from '@material-ui/core/colors/green'

export const theme = createMuiTheme({
  palette: {
    primary: { main: blue[700] },
    secondary: { main: yellow[700] },
    success: green[500],
  },
  lanscapeWidth: '33.33vw',
})
