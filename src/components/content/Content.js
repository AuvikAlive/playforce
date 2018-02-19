import React from 'react'
import { withStyles } from 'material-ui/styles'
import Grid from 'material-ui/Grid'

const styles = theme => ({
  root: {
    flexGrow: 1,
    padding: '48px 72px'
  }
})

const Content = ({ classes, children }) => (
  <Grid container className={classes.root}>
    <Grid item xs={12}>
      {children}
    </Grid>
  </Grid>
)

export default withStyles(styles)(Content)
