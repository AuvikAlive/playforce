import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Paper from 'material-ui/Paper'
import Grid from 'material-ui/Grid'
import IconButton from 'material-ui/IconButton'
import ArrowBackIcon from 'material-ui-icons/ArrowBack'
import List, { ListItem, ListItemText } from 'material-ui/List'
import { StyledSettings } from './StyledSettings'

export class Settings extends Component {
  componentDidMount() {
    const { setNavTitle, setLeftNavComponent } = this.context
    const { history } = this.props

    setNavTitle('Settings')
    setLeftNavComponent(
      <IconButton color="inherit" aria-label="Search" onClick={history.goBack}>
        <ArrowBackIcon />
      </IconButton>,
    )
  }

  componentWillUnmount() {
    const { removeNavTitle, removeLefNavComponent } = this.context

    removeNavTitle()
    removeLefNavComponent()
  }
  render() {
    return (
      <StyledSettings>
        <Paper className="paper">
          <Grid container spacing={0} className="container">
            <Grid item xs={12}>
              <List component="nav" disablePadding>
                <ListItem button>
                  <ListItemText primary="General settings" />
                </ListItem>
                <ListItem button>
                  <ListItemText primary="Some other settings" />
                </ListItem>
              </List>
            </Grid>
          </Grid>
        </Paper>
      </StyledSettings>
    )
  }
}

Settings.contextTypes = {
  setNavTitle: PropTypes.func,
  removeNavTitle: PropTypes.func,
  setLeftNavComponent: PropTypes.func,
  removeLefNavComponent: PropTypes.func,
}
