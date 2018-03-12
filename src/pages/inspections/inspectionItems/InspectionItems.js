import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Paper from 'material-ui/Paper'
import List, { ListItem, ListItemText } from 'material-ui/List'
import { StyledInspectionItems } from './StyledInspectionItems'
import { StyledNavLink } from '../../../components/styledNavLink/StyledNavLink'

export class InspectionItems extends Component {
  state = {}

  componentDidMount() {
    const { setNavTitle } = this.context

    setNavTitle('Add Inspection')
  }

  componentWillUnmount() {
    const { removeNavTitle } = this.context

    removeNavTitle()
  }

  render() {
    const { match } = this.props

    return (
      <StyledInspectionItems>
        <Paper>
          <List component="nav" disablePadding>
            <StyledNavLink to={`${match.url}/cover`}>
              <ListItem button>
                <ListItemText primary="Cover" />
              </ListItem>
            </StyledNavLink>

            <StyledNavLink to={`${match.url}/auditSummary`}>
              <ListItem button>
                <ListItemText primary="Audit Summary" />
              </ListItem>
            </StyledNavLink>

            <StyledNavLink to={`${match.url}/conditionRating`}>
              <ListItem button>
                <ListItemText primary="Condition Rating" />
              </ListItem>
            </StyledNavLink>

            <StyledNavLink to={`${match.url}/complianceIssues`}>
              <ListItem button>
                <ListItemText primary="Identified Compliance Issues" />
              </ListItem>
            </StyledNavLink>

            <StyledNavLink to={`${match.url}/maintenanceIssues`}>
              <ListItem button>
                <ListItemText primary="Identified Maintenance Issues" />
              </ListItem>
            </StyledNavLink>
          </List>
        </Paper>
      </StyledInspectionItems>
    )
  }
}

InspectionItems.contextTypes = {
  setNavTitle: PropTypes.func,
  removeNavTitle: PropTypes.func,
}
