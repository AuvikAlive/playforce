import { createMuiTheme } from 'material-ui/styles'
import blue from 'material-ui/colors/blue'
import yellow from 'material-ui/colors/yellow'

export const theme = createMuiTheme({
  palette: {
    primary: { main: blue[500] },
    secondary: { main: yellow[700] }
  }
})
