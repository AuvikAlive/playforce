import React from 'react'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import Typography from '@material-ui/core/Typography'
import DeleteIcon from '@material-ui/icons/Delete'

export const InspectionTypeList = ({ inspectionTypes, deletePrompt }) => {
  return inspectionTypes.length > 0 ? (
    <List component="nav" disablePadding>
      {inspectionTypes.map(({ id, name }) => {
        return (
          <ListItem key={id} button>
            <ListItemText primary={name} />
            <ListItemIcon onClick={() => deletePrompt(id)}>
              <DeleteIcon />
            </ListItemIcon>
          </ListItem>
        )
      })}
    </List>
  ) : (
    <ListItem>
      <ListItemText
        primary={
          <Typography component="span" variant="title" align="center">
            Try adding an item to get started!
          </Typography>
        }
      />
    </ListItem>
  )
}
