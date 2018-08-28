import React from 'react'
import Typography from '@material-ui/core/Typography'
import { StyledEmptyListPlaceholder } from './StyledEmptyListPlaceholder'
import { SearchIcon } from './SearchIcon'

export const EmptyListPlaceholder = ({ text }) => {
  return (
    <StyledEmptyListPlaceholder className="StyledEmptyListPlaceholder">
      <Typography variant="title" align="center">
        <SearchIcon alt="search" className="empty-list-image" />
        {text || 'Try adding an item to get started!'}
      </Typography>
    </StyledEmptyListPlaceholder>
  )
}
