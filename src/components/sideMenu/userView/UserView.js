import React from 'react'
import Avatar from '@material-ui/core/Avatar'
import Typography from '@material-ui/core/Typography'
import { individualUserMode } from '../../../constants/'
import { getInitials, getUserMode } from '../../../functions/'
import { StyledUserView } from './StyledUserView'

export const UserView = ({ profile }) => {
  const { displayName, email, userMode } = profile

  return (
    <StyledUserView>
      <div className="content">
        <Avatar alt="User Name" className="avatar avatar-letters">
          {getInitials(displayName)}
        </Avatar>

        <Typography variant="title">{displayName}</Typography>
        <Typography variant="subheading">{email}</Typography>

        {(userMode === individualUserMode || !userMode) && (
          <Typography variant="caption">{getUserMode(userMode)}</Typography>
        )}

        {userMode &&
          userMode !== individualUserMode && (
            <Typography variant="caption">{`Group member: ${userMode}`}</Typography>
          )}
      </div>

      <div className="background" />
    </StyledUserView>
  )
}
