import React from 'react'
import Avatar from 'material-ui/Avatar'
import Typography from 'material-ui/Typography'
import { getInitials } from '../../../utilities/getInitials'
import { StyledUserView } from './StyledUserView'
import { backgroundLowPng } from './backgroundLowPng'

export const UserView = ({ profile }) => {
  const { image, displayName, email } = profile
  return (
    <StyledUserView>
      <div className="content">
        {image ? (
          <Avatar alt="User Name" src={image} className="avatar" />
        ) : (
          <Avatar className="avatar">{getInitials(displayName)}</Avatar>
        )}
        <Typography variant="title" color="inherit">
          {displayName}
        </Typography>
        <Typography variant="subheading" color="inherit">
          {email}
        </Typography>
      </div>
      <img src={backgroundLowPng} alt="background" className="background" />
      {/* <picture className="background">
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
      </picture> */}
    </StyledUserView>
  )
}
