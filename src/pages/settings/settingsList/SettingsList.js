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
    const { match } = this.props

    return (
      <StyledSettingsList className="StyledSettingsList">
        <Paper className="paper">
          <Grid container spacing={0} className="container">
            <Grid item xs={12}>
              <List component="nav" disablePadding>
                <StyledNavLink to={`${match.url}/profile`}>
                  <ListItem button>
                    <ListItemText primary="Profile" />
                  </ListItem>
                </StyledNavLink>

                <StyledNavLink to={`${match.url}/standards`}>
                  <ListItem button>
                    <ListItemText primary="Standards" />
                  </ListItem>
                </StyledNavLink>

                <StyledNavLink to={`${match.url}/clients`}>
                  <ListItem button>
                    <ListItemText primary="Clients" />
                  </ListItem>
                </StyledNavLink>

                <StyledNavLink to={`${match.url}/manufacturers`}>
                  <ListItem button>
                    <ListItemText primary="Manufacturers" />
                  </ListItem>
                </StyledNavLink>

                <StyledNavLink to={`${match.url}/operators`}>
                  <ListItem button>
                    <ListItemText primary="Operators" />
                  </ListItem>
                </StyledNavLink>

                <StyledNavLink to={`${match.url}/commonIssues`}>
                  <ListItem button>
                    <ListItemText primary="Common Issues" />
                  </ListItem>
                </StyledNavLink>

                <StyledNavLink to={`${match.url}/companyInformation`}>
                  <ListItem button>
                    <ListItemText primary="Company Information" />
                  </ListItem>
                </StyledNavLink>

                <StyledNavLink to={`${match.url}/sidenavBackground`}>
                  <ListItem button>
                    <ListItemText primary="Sidenav Background" />
                  </ListItem>
                </StyledNavLink>

                <StyledNavLink to={`${match.url}/auditSummary`}>
                  <ListItem button>
                    <ListItemText primary="Standard Audit Summary" />
                  </ListItem>
                </StyledNavLink>
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
