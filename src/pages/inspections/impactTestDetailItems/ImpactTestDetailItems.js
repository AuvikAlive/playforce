import React, { Component } from 'react'
import Paper from '@material-ui/core/Paper'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import ListSubheader from '@material-ui/core/ListSubheader'
import { AddButton } from '../../../components/addButton/AddButton'
import { StyledNavLink } from '../../../components/styledNavLink/StyledNavLink'
import { contextTypesTitleLeftRightNav } from '../../../constants/'
import { onComponentWillUnmountWithTitleLeftRightNav } from '../../../functions/'
import { StyledImpactTestDetailItems } from './StyledImpactTestDetailItems'
import { onComponentDidMount } from './functions/onComponentDidMount'

export class ImpactTestDetailItems extends Component {
  componentDidMount() {
    onComponentDidMount(this)
  }

  componentWillUnmount() {
    onComponentWillUnmountWithTitleLeftRightNav(this)
  }

  render() {
    const { match, impactTest } = this.props
    const dropTestAdded =
      impactTest && impactTest.dropTests && impactTest.dropTests.length > 0

    return (
      <StyledImpactTestDetailItems className="StyledImpactTestDetailItems">
        <AddButton to={`${match.url}/addDrop`} pulse={!dropTestAdded} />

        <Paper>
          <List component="nav" disablePadding>
            <StyledNavLink to={`${match.url}/surface`}>
              <ListItem button>
                <ListItemText primary="Surface Details" />
              </ListItem>
            </StyledNavLink>
          </List>

          <List
            component="nav"
            disablePadding
            subheader={<ListSubheader component="div">Drops</ListSubheader>}
          >
            {dropTestAdded &&
              impactTest.dropTests.map(({ id }) => (
                <StyledNavLink key={id} to={`${match.url}/editDrop/${id}`}>
                  <ListItem button>
                    <ListItemText primary={`Drop ${id}`} />
                  </ListItem>
                </StyledNavLink>
              ))}
          </List>
        </Paper>
      </StyledImpactTestDetailItems>
    )
  }
}

ImpactTestDetailItems.contextTypes = contextTypesTitleLeftRightNav
