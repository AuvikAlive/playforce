import React, { Component } from 'react'
import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import { StyledNavLink } from '../../../components/styledNavLink/StyledNavLink'
import { contextTypesTitle } from '../../../constants/'
import {
  onComponentDidMountWithTitle,
  onComponentWillUnmountWithTitle,
} from '../../../functions/'
import { StyledSettingsList } from './StyledSettingsList'
import { links } from './links'

export class SettingsList extends Component {
  componentDidMount() {
    const title = 'Settings'

    onComponentDidMountWithTitle(this, title)
  }

  componentWillUnmount() {
    onComponentWillUnmountWithTitle(this)
  }
  render() {
    const { match } = this.props

    return (
      <StyledSettingsList className="StyledSettingsList">
        <Paper className="paper">
          <Grid container spacing={0} className="container">
            <Grid item xs={12}>
              <List component="nav" disablePadding>
                {links.map(({ route, name }) => (
                  <StyledNavLink key={name} to={`${match.url}/${route}`}>
                    <ListItem button>
                      <ListItemText primary={name} />
                    </ListItem>
                  </StyledNavLink>
                ))}
              </List>
            </Grid>
          </Grid>
        </Paper>
      </StyledSettingsList>
    )
  }
}

SettingsList.contextTypes = contextTypesTitle
