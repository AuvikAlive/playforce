import React from 'react'
import IconButton from '@material-ui/core/IconButton'
import MoreVertIcon from '@material-ui/icons/MoreVert'
import SearchIcon from '@material-ui/icons/Search'
import { openMenu } from '../../../../functions/'

export const setNav = component => {
  const { setNavTitle, setRightNavComponent } = component.context
  const { openSearchBar } = component.props

  setNavTitle('Sites')

  setRightNavComponent(
    <div>
      <IconButton color="inherit" aria-label="Search" onClick={openSearchBar}>
        <SearchIcon />
      </IconButton>

      <IconButton
        color="inherit"
        aria-label="More"
        onClick={openMenu(component)}
      >
        <MoreVertIcon aria-label="More" />
      </IconButton>
    </div>
  )
}
