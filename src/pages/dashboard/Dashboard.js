import React, { Component } from 'react'
import TextField from '@material-ui/core/TextField'
import MenuItem from '@material-ui/core/MenuItem'
import { Content } from '../../components/content/Content'
import {
  contextTypesTitleUnsubscriber,
  individualUserMode,
} from '../../constants/'
import { showContentWhenLoaded, getUserMode } from '../../functions/'
import { onComponentDidMount } from './onComponentDidMount'

export class Dashboard extends Component {
  componentDidMount() {
    onComponentDidMount(this)
  }

  render() {
    const { userGroupsLoaded, userMode, setUserMode, userGroups } = this.props
    const isMember = userGroups && userGroups.length > 0

    return showContentWhenLoaded(
      userGroupsLoaded,
      <Content>
        <TextField
          fullWidth
          select
          label="Select app mode"
          margin="normal"
          value={getUserMode(userMode)}
          onChange={event => setUserMode(event.target.value)}
        >
          <MenuItem value={individualUserMode}>{individualUserMode}</MenuItem>

          {isMember && <MenuItem disabled>Group Member</MenuItem>}

          {isMember &&
            userGroups.map(({ id, name }, index) => (
              <MenuItem key={index} value={id}>
                {name}
              </MenuItem>
            ))}
        </TextField>

        {/* {userMode === userModes[1] && (
          <TextField
            fullWidth
            select
            label="Select a group"
            margin="normal"
            value={userGroup || ''}
            onChange={event => setUserGroup(event.target.value)}
          >
            {isMember ? (
              userGroups.map(({ id, name }, index) => (
                <MenuItem disabled key={index} value={id}>
                  {name}
                </MenuItem>
              ))
            ) : (
              <MenuItem value="">No groups joined yet</MenuItem>
            )}
          </TextField>
        )} */}
      </Content>
    )
  }
}

Dashboard.contextTypes = contextTypesTitleUnsubscriber
