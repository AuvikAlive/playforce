import React, { Component } from 'react'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import { AddButton } from '../../../components/addButton/AddButton'
import { StyledNavLink } from '../../../components/styledNavLink/StyledNavLink'
import { showContentWhenLoaded } from '../../../functions/'
import { contextTypes } from './contextTypes'
import { onComponentDidMount, onComponentWillUnmount } from './functions/'
import { StyledGroupList } from './StyledGroupList'

export class GroupList extends Component {
  componentDidMount() {
    onComponentDidMount(this)
  }

  componentWillUnmount() {
    onComponentWillUnmount(this)
  }

  render() {
    const { groupsLoaded, groups, match } = this.props
    const groupsAdded = groups.length > 0

    return showContentWhenLoaded(
      groupsLoaded,
      <StyledGroupList className="StyledGroupList">
        <AddButton to={match.url + '/addGroup'} pulse={!groupsAdded} />

        {groupsAdded ? (
          <Paper className="paper">
            <List component="nav" disablePadding>
              {groups.map(({ name, id }) => (
                <StyledNavLink key={id} to={`${match.url}/manageGroup/${id}`}>
                  <ListItem divider button>
                    <ListItemText primary={name} />
                  </ListItem>
                </StyledNavLink>
              ))}
            </List>
          </Paper>
        ) : (
          <Typography variant="title" align="center">
            Try adding a group to get started!
          </Typography>
        )}
      </StyledGroupList>
    )
  }
}

GroupList.contextTypes = contextTypes
