import React, { Component } from 'react'
import TextField from '@material-ui/core/TextField'
import MenuItem from '@material-ui/core/MenuItem'
import { Content } from '../../components/content/Content'
import { contextTypesTitleUnsubscriber, userModes } from '../../constants/'
import { showContentWhenLoaded, getUserMode } from '../../functions/'
import { onoComponentDidMount } from './onComponentDidMount'

export class Dashboard extends Component {
  componentDidMount() {
    onoComponentDidMount(this)
  }

  render() {
    const {
      userGroupsLoaded,
      userMode,
      setUserMode,
      userGroups,
      userGroup,
      setUserGroup,
    } = this.props

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
          {userModes.map((value, index) => (
            <MenuItem key={index} value={value}>
              {value}
            </MenuItem>
          ))}
        </TextField>

        {userMode === userModes[1] && (
          <TextField
            fullWidth
            select
            label="Select a group"
            margin="normal"
            value={userGroup || ''}
            onChange={event => setUserGroup(event.target.value)}
          >
            {userGroups && userGroups.length > 0 ? (
              userGroups.map(({ id, name }, index) => (
                <MenuItem key={index} value={id}>
                  {name}
                </MenuItem>
              ))
            ) : (
              <MenuItem value="">No groups joined yet</MenuItem>
            )}
          </TextField>
        )}
      </Content>
    )
  }
}

Dashboard.contextTypes = contextTypesTitleUnsubscriber
