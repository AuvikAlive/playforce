import React from 'react'
import Avatar from '@material-ui/core/Avatar'
import CheckIcon from '@material-ui/icons/Check'
import { StyledListAvatar } from './StyledListAvatar'

export const ListAvatar = ({ itemSelected, text }) => {
  return (
    <StyledListAvatar className="StyledListAvatar">
      <Avatar className="avatar">{itemSelected ? <CheckIcon /> : text}</Avatar>
    </StyledListAvatar>
  )
}
