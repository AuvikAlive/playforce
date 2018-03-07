import React from 'react'
import Avatar from 'material-ui/Avatar'
import Typography from 'material-ui/Typography'
import { isEmpty } from 'react-redux-firebase'
import { StyledUserView } from './StyledUserView'
import avatar from './avatar.jpg'
import backgroundLowWebp from './backgroundLow.webp'
import backgroundWebp from './background.webp'
import backgroundLow from './backgroundLow.png'
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
        <source srcSet={backgroundLowWebp} type="image/webp" />
        <source
          srcSet={backgroundWebp}
          type="image/webp"
          media="(min-width: 1080px)"
        />
        <source srcSet={backgroundLow} type="image/jpeg" />
        <source
          srcSet={background}
          type="image/jpeg"
          media="(min-width: 1080px)"
        />
        <img src={backgroundLow} alt="background" />
      </picture>
    </StyledUserView>
  )
