import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Paper from 'material-ui/Paper'
import Grid from 'material-ui/Grid'
import List, { ListItem, ListItemText } from 'material-ui/List'
import { StyledSettingsList } from './StyledSettingsList'
import { StyledNavLink } from '../../../components/styledNavLink/StyledNavLink'

export class SettingsList extends Component {
  componentDidMount() {
    const { setNavTitle } = this.context

    setNavTitle('Settings')
  }

  componentWillUnmount() {
    const { removeNavTitle } = this.context

    removeNavTitle()
  }
  render() {
    return (
      <StyledSettingsList>
        <Paper className="paper">
          <Grid container spacing={0} className="container">
            <Grid item xs={12}>
              <List component="nav" disablePadding>
                <StyledNavLink to="settings/profile">
                  <ListItem button>
                    <ListItemText primary="Profile Settings" />
                  </ListItem>
                </StyledNavLink>

                <ListItem button>
                  <ListItemText primary="Some other settings" />
                </ListItem>
              </List>
            </Grid>
          </Grid>
        </Paper>
      </StyledSettingsList>
    )
  }
}

SettingsList.contextTypes = {
  setNavTitle: PropTypes.func,
  removeNavTitle: PropTypes.func,
  setLeftNavComponent: PropTypes.func,
  removeLefNavComponent: PropTypes.func,
}
