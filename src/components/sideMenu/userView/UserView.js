import React from 'react'
import Avatar from 'material-ui/Avatar'
import Typography from 'material-ui/Typography'
import { isEmpty } from 'react-redux-firebase'
import { StyledUserView } from './StyledUserView'
import avatar from './avatar.jpg'
import backgroundWebp from './background.webp'
import background from './background.png'

export const UserView = ({ profile }) =>
  !isEmpty(profile) && (
    <StyledUserView>
      <div className="content">
        <Avatar alt="User Name" src={avatar} className="avatar" />
        <Typography variant="title" color="inherit">
          {profile.displayName}
        </Typography>
        <Typography variant="subheading" color="inherit">
          {profile.email}
        </Typography>
      </div>
      <picture className="background">
        <source srcSet={backgroundWebp} type="image/webp" />
        <source srcSet={background} type="image/jpeg" />
        <img src={background} alt="background" />
      </picture>
    </StyledUserView>
  )
