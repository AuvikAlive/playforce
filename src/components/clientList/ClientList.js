import React from 'react'
import List, { ListItem, ListItemText, ListItemIcon } from 'material-ui/List'
import Typography from 'material-ui/Typography'
import DeleteIcon from 'material-ui-icons/Delete'

export const ClientList = ({ clients, deletePrompt }) => {
  return clients.length > 0 ? (
    <List component="nav" disablePadding>
      {clients.map(({ id, name }) => {
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
