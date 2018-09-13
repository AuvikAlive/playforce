import React from 'react'
import Avatar from '@material-ui/core/Avatar'
import Typography from '@material-ui/core/Typography'
import { userModes } from '../../../constants/'
import { getInitials, getUserMode } from '../../../functions/'
import { StyledUserView } from './StyledUserView'

export const UserView = ({ profile }) => {
  const { displayName, email, userMode, userGroup } = profile

  return (
    <StyledUserView>
      <div className="content">
        <Avatar alt="User Name" className="avatar avatar-letters">
          {getInitials(displayName)}
        </Avatar>

        <Typography variant="title">{displayName}</Typography>
        <Typography variant="subheading">{email}</Typography>

        {(userMode === userModes[0] || !userMode) && (
          <Typography variant="caption">{getUserMode(userMode)}</Typography>
        )}

        {userMode === userModes[1] && (
          <Typography variant="caption">{`${userModes[1]}: ${userGroup ||
            'No group selected'}`}</Typography>
        )}
      </div>

      <div className="background" />
    </StyledUserView>
  )
}
