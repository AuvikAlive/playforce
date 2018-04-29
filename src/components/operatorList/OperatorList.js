import React from 'react'
import List, { ListItem, ListItemText, ListItemIcon } from 'material-ui/List'
import DeleteIcon from 'material-ui-icons/Delete'
import Typography from 'material-ui/Typography'

export const OperatorList = ({ operators, deletePrompt }) => {
  return (
    <List component="nav" disablePadding>
      {operators.length > 0 ? (
        operators.map(({ id, name }) => {
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
