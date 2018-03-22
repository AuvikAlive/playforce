import React from 'react'
import Avatar from 'material-ui/Avatar'
import Typography from 'material-ui/Typography'
import { isEmpty } from 'react-redux-firebase'
import { getInitials } from '../../../utilities/getInitials';
import { StyledUserView } from './StyledUserView'
import backgroundLowWebp from './backgroundLow.webp'
import backgroundWebp from './background.webp'
import backgroundLow from './backgroundLow.png'
import background from './background.png'

export const UserView = ({ profile }) => {
  const { image, displayName, email } = profile
  return (
    !isEmpty(profile) && (
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
  )
}
