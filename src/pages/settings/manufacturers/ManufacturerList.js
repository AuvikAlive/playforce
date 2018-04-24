import React from 'react'
import List, { ListItem, ListItemText, ListItemIcon } from 'material-ui/List'
import DeleteIcon from 'material-ui-icons/Delete'
import Typography from 'material-ui/Typography'

export const ManufacturerList = ({ manufacturers, deletePrompt }) => {
  return (
    <List component="nav" disablePadding>
      {manufacturers.length > 0 ? (
        manufacturers.map(({ id, name }) => {
          return (
            <ListItem key={id} button>
              <ListItemText primary={name} />
              <ListItemIcon onClick={() => deletePrompt(id)}>
                <DeleteIcon />
              </ListItemIcon>
            </ListItem>
          )
        })
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
      )}
    </List>
  )
}
