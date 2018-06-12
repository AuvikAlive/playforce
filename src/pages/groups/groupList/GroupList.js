import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { LinearProgress } from 'material-ui/Progress'
import Paper from 'material-ui/Paper'
import Typography from 'material-ui/Typography'
import List, { ListItem, ListItemText } from 'material-ui/List'
import Button from 'material-ui/Button'
import AddIcon from 'material-ui-icons/Add'
import { StyledNavLink } from '../../../components/styledNavLink/StyledNavLink'
import { StyledGroupList } from './StyledGroupList'

export class GroupList extends Component {
  async componentDidMount() {
    const { setNavTitle, addUnsubscriber } = this.context
    const { groupsLoaded, fetchGroupsRealTime } = this.props

    setNavTitle('Manage Groups')

    !groupsLoaded && addUnsubscriber(await fetchGroupsRealTime())
  }

  componentWillUnmount() {
    const { removeNavTitle } = this.context

    removeNavTitle()
  }

  render() {
    const { groupsLoaded, groups, match } = this.props
    const groupsAdded = groups.length > 0

    return groupsLoaded ? (
      <StyledGroupList className="StyledGroupList">
        <StyledNavLink to={match.url + '/addGroup'} className="add-icon">
          <Button
            variant="fab"
            color="primary"
            aria-label="add inspection"
            className={groupsAdded ? '' : 'pulse'}
          >
            <AddIcon />
          </Button>
        </StyledNavLink>
        {groupsAdded ? (
          <Paper className="paper">
            <List component="nav" disablePadding>
              {groups.map(({ name, id }) => (
                <ListItem divider button key={id}>
                  <ListItemText primary={name} />
                </ListItem>
              ))}
            </List>
          </Paper>
        ) : (
          <Typography variant="title" align="center">
            Try adding a group to get started!
          </Typography>
        )}
      </StyledGroupList>
    ) : (
      <LinearProgress />
    )
  }
}

GroupList.contextTypes = {
  setNavTitle: PropTypes.func,
  removeNavTitle: PropTypes.func,
  addUnsubscriber: PropTypes.func,
}
