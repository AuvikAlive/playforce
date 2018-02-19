import React from 'react'
import { withStyles } from 'material-ui/styles'
import AppBar from 'material-ui/AppBar'
import Toolbar from 'material-ui/Toolbar'
import Typography from 'material-ui/Typography'
import Button from 'material-ui/Button'
import logo from './logo.JPG'

const styles = {
  root: {
    flexGrow: 1
  },
  flex: {
    flex: 1
  },
  toolBar: {
    // padding: '0 64px'
  },
  image: {
    height: 64
  },
  firstButton: {
    marginRight: 8
  }
}

function ButtonAppBar(props) {
  const { classes } = props
  return (
    <div className={classes.root}>
      <AppBar position="static" color="default">
        <Toolbar className={classes.toolBar}>
          <Typography variant="title" color="inherit" className={classes.flex}>
            <img src={logo} alt="logo" className={classes.image} />
          </Typography>
          <Button color="inherit" className={classes.firstButton}>
            Sign In
          </Button>
          <Button variant="raised" color="secondary">
            Try Free
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  )
}

export default withStyles(styles)(ButtonAppBar)
