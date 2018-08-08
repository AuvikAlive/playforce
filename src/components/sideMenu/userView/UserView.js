import React from 'react'
import Avatar from '@material-ui/core/Avatar'
import Typography from '@material-ui/core/Typography'
import { getInitials } from '../../../functions/getInitials'
import { StyledUserView } from './StyledUserView'
// import { backgroundLowPng } from './backgroundLowPng'

export const UserView = ({ profile }) => {
  // const { image, photoURL, displayName, email, background } = profile
  const { displayName, email } = profile

  return (
    <StyledUserView>
      <div className="content">
        <Avatar alt="User Name" className="avatar avatar-letters">
          {getInitials(displayName)}
        </Avatar>
        {/* {image || photoURL ? (
          <Avatar
            alt="Display Picture"
            src={image || photoURL}
            className="avatar"
          />
        ) : (
          <Avatar alt="User Name" className="avatar avatar-letters">
            {getInitials(displayName)}
          </Avatar>
        )} */}

        <Typography variant="title">{displayName}</Typography>

        <Typography variant="subheading">{email}</Typography>

        {/* <Typography variant="title" color="inherit">
          {displayName}
        </Typography>

        <Typography variant="subheading" color="inherit">
          {email}
        </Typography> */}
      </div>

      {/* <img
        src={background || backgroundLowPng}
        alt="background"
        className="background"
      /> */}

      <div className="background" />
    </StyledUserView>
  )
}
