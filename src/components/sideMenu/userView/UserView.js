import React from 'react'
import Avatar from 'material-ui/Avatar'
import Typography from 'material-ui/Typography'
import { isEmpty } from 'react-redux-firebase'
import { StyledUserView } from './StyledUserView'
import avatar from './avatar.jpg'
import background from './background.png'

export const UserView = ({ profile }) =>
  !isEmpty(profile) && (
    <StyledUserView>
      <div className="content">
        <Avatar alt="User Name" src={avatar} className="avatar" />
        <Typography variant="title" color="inherit">
          {profile.username}
        </Typography>
        <Typography variant="subheading" color="inherit">
          {profile.email}
        </Typography>
      </div>
      <img src={background} alt="background" className="background" />
    </StyledUserView>
  )
