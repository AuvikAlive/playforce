import React, { Component } from 'react'
import Paper from '@material-ui/core/Paper'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import ListSubheader from '@material-ui/core/ListSubheader'
import { AddButton } from '../../../components/addButton/AddButton'
import { StyledNavLink } from '../../../components/styledNavLink/StyledNavLink'
import { contextTypesTitleLeftRightNav } from '../../../constants/'
import {
  onComponentDidMountWithTitleLeftRightNavDelete,
  onComponentWillUnmountWithTitleLeftRightNav,
} from '../../../functions/'
import { StyledImpactTestItems } from './StyledImpactTestItems'
import { deleteImpactTest } from './deleteImpactTest'

export class ImpactTestItems extends Component {
  componentDidMount() {
    onComponentDidMountWithTitleLeftRightNavDelete(
      this,
      'Impact Testing',
      deleteImpactTest
    )
  }

  componentWillUnmount() {
    onComponentWillUnmountWithTitleLeftRightNav(this)
  }

  render() {
    const { match, impactTests } = this.props
    const impactTestsAdded = impactTests && impactTests.length > 0

    return (
      <StyledImpactTestItems className="StyledImpactTestItems">
        <AddButton to={`${match.url}/add`} pulse={!impactTestsAdded} />

        <Paper>
          <List component="nav" disablePadding>
            <StyledNavLink to={`${match.url}/general`}>
              <ListItem button>
                <ListItemText primary="General Info" />
              </ListItem>
            </StyledNavLink>
          </List>

          <List
            component="nav"
            disablePadding
            subheader={<ListSubheader component="div">Tests</ListSubheader>}
          >
            {impactTests.map(({ id, surface: { location } }) => (
              <StyledNavLink key={id} to={`${match.url}/edit/${id}`}>
                <ListItem button>
                  <ListItemText primary={location} />
                </ListItem>
              </StyledNavLink>
            ))}
          </List>
        </Paper>
      </StyledImpactTestItems>
    )
  }
}

ImpactTestItems.contextTypes = contextTypesTitleLeftRightNav
