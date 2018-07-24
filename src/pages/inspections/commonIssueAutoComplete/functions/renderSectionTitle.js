import React from 'react'
import ListSubheader from '@material-ui/core/ListSubheader'

export const renderSectionTitle = section => {
  return (
    <ListSubheader color="primary" component="div">
      {section.title}
    </ListSubheader>
  )
}
