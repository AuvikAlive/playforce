import React from 'react'
import Typography from '@material-ui/core/Typography'
import { StyledEmptyListPlaceholder } from './StyledEmptyListPlaceholder'
import image from './search.svg'

export const EmptyListPlaceholder = ({ text }) => {
  return (
    <StyledEmptyListPlaceholder className="StyledEmptyListPlaceholder">
      <Typography variant="title" align="center">
        <img src={image} alt="search" className="empty-list-image" />
        {text || 'Try adding an item to get started!'}
      </Typography>
    </StyledEmptyListPlaceholder>
  )
}
