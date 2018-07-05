import React, { Component } from 'react'
import Paper from '@material-ui/core/Paper'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import ListSubheader from '@material-ui/core/ListSubheader'
import Button from '@material-ui/core/Button'
import AddIcon from '@material-ui/icons/Add'
import { StyledNavLink } from '../../../components/styledNavLink/StyledNavLink'
import { contextTypesTitleLeftRightNav } from '../../../constants/'
import { onComponentWillUnmountWithTitleLeftRightNav } from '../../../functions/'
import { StyledImpactTestItems } from './StyledImpactTestItems'
import { onComponentDidMount } from './functions/'

export class ImpactTestItems extends Component {
  componentDidMount() {
    onComponentDidMount(this)
  }

  componentWillUnmount() {
    onComponentWillUnmountWithTitleLeftRightNav(this)
  }

  render() {
    const { match, impactTests } = this.props

    return (
      <StyledImpactTestItems className="StyledImpactTestItems">
        <StyledNavLink to={`${match.url}/add`} className="add-icon">
          <Button
            variant="fab"
            color="primary"
            aria-label="add impact test"
            className={!!impactTests && impactTests.length > 0 ? '' : 'pulse'}
          >
            <AddIcon />
          </Button>
        </StyledNavLink>
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
