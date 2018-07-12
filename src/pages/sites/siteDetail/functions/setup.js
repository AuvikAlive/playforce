import React from 'react'
import IconButton from '@material-ui/core/IconButton'
import ArrowBackIcon from '@material-ui/icons/ArrowBack'
import DeleteIcon from '@material-ui/icons/Delete'
import DirectionsIcon from '@material-ui/icons/Directions'
import { deleteSite } from './deleteSite'

export const setup = (component, site) => {
  const { history, openDialog } = component.props

  const {
    setLeftNavComponent,
    setRightNavComponent,
    setNavTitle,
  } = component.context

  const { name, street, suburb, state, postcode, country } = site
  const address = `${street}+${suburb}+${state}+${postcode}+${country}`
  const encodedAddress = encodeURI(address)

  setLeftNavComponent(
    <IconButton color="inherit" aria-label="Search" onClick={history.goBack}>
      <ArrowBackIcon />
    </IconButton>
  )
  setNavTitle(name)

  setRightNavComponent(
    <div>
      <a
        target="_blank"
        href={`https://www.google.com/maps/dir/?api=1&destination=${encodedAddress}`}
        style={{
          color: 'inherit',
          textDecoration: 'none',
        }}
      >
        <IconButton color="inherit" aria-label="Directions">
          <DirectionsIcon />
        </IconButton>
      </a>
      <IconButton
        color="inherit"
        aria-label="Search"
        onClick={() => openDialog(deleteSite(component))}
      >
        <DeleteIcon />
      </IconButton>
    </div>
  )
}
