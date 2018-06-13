import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { LinearProgress } from 'material-ui/Progress'
import Paper from 'material-ui/Paper'
import Typography from 'material-ui/Typography'
import List, { ListItem, ListItemText } from 'material-ui/List'
import Button from 'material-ui/Button'
import IconButton from 'material-ui/IconButton'
import AddIcon from 'material-ui-icons/Add'
import ArrowBackIcon from 'material-ui-icons/ArrowBack'
import { StyledNavLink } from '../../../components/styledNavLink/StyledNavLink'
import { StyledGroupUserList } from './StyledGroupUserList'

export class GroupUserList extends Component {
  async componentDidMount() {
    const { setNavTitle, setLeftNavComponent, addUnsubscriber } = this.context
    const { id, history, fetchGroupUsersRealTime } = this.props

    setNavTitle(`Manage ${id}`)

    setLeftNavComponent(
      <IconButton
        color="inherit"
        aria-label="navigate back"
        onClick={() => history.goBack()}
      >
        <ArrowBackIcon />
      </IconButton>
    )

    addUnsubscriber(await fetchGroupUsersRealTime(id))
  }

  componentWillUnmount() {
    const { removeNavTitle, removeLefNavComponent } = this.context

    removeNavTitle()
    removeLefNavComponent()
  }

  render() {
    const { groupUsersLoaded, groupUsers, match } = this.props
    const groupUsersAdded = groupUsers.length > 0

    return groupUsersLoaded ? (
      <StyledGroupUserList className="StyledGroupUserList">
        <StyledNavLink to={match.url + '/addMember'} className="add-icon">
          <Button
            variant="fab"
            color="primary"
            aria-label="add inspection"
            className={groupUsersAdded ? '' : 'pulse'}
          >
            <AddIcon />
          </Button>
        </StyledNavLink>

        {groupUsersAdded ? (
          <Paper className="paper">
            <List component="nav" disablePadding>
              {groupUsers.map(({ displayName, id }) => (
                <ListItem divider button key={id}>
                  <ListItemText primary={displayName} />
                </ListItem>
              ))}
            </List>
          </Paper>
        ) : (
          <Typography variant="title" align="center">
            Try adding a member to get started!
          </Typography>
        )}
      </StyledGroupUserList>
    ) : (
      <LinearProgress />
    )
  }
}

GroupUserList.contextTypes = {
  setNavTitle: PropTypes.func,
  removeNavTitle: PropTypes.func,
  setLeftNavComponent: PropTypes.func,
  removeLefNavComponent: PropTypes.func,
  addUnsubscriber: PropTypes.func,
}
