import React from 'react'
import Avatar from 'material-ui/Avatar'
import Typography from 'material-ui/Typography'
import { StyledUserView } from './StyledUserView'
import avatar from './avatar.jpg'
import background from './background.png'

export const UserView = () => (
  <StyledUserView>
    <div className="content">
      <Avatar alt="User Name" src={avatar} className="avatar" />
      <Typography variant="title" color="inherit">
        Title
      </Typography>
      <Typography variant="subheading" color="inherit">
        Subheading
      </Typography>
    </div>
    <img src={background} alt="background" className="background" />
  </StyledUserView>
)
