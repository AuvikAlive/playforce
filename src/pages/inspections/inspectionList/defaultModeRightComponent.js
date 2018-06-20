import React from 'react'
import IconButton from '@material-ui/core/IconButton'
import SearchIcon from '@material-ui/icons/Search'
import GridOnIcon from '@material-ui/icons/GridOn'
import ListIcon from '@material-ui/icons/List'

export const DefaultModeRightComponent = ({
  view,
  openSearchBar,
  toggleView,
}) => {
  return (
    <div>
      <IconButton color="inherit" aria-label="Search" onClick={openSearchBar}>
        <SearchIcon />
      </IconButton>

      {view === 'list' && (
        <IconButton color="inherit" aria-label="Grid View" onClick={toggleView}>
          <GridOnIcon />
        </IconButton>
      )}

      {view === 'grid' && (
        <IconButton color="inherit" aria-label="List View" onClick={toggleView}>
          <ListIcon />
        </IconButton>
      )}
    </div>
  )
}
