import React from "react"
import List from "@material-ui/core/List"
import ListItem from "@material-ui/core/ListItem"
import ListItemText from "@material-ui/core/ListItemText"
import ListItemIcon from "@material-ui/core/ListItemIcon"
import DeleteIcon from "@material-ui/icons/Delete"
import Typography from "@material-ui/core/Typography"

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
              <Typography component="span" variant="h6" align="center">
                Try adding an item to get started!
              </Typography>
            }
          />
        </ListItem>
      )}
    </List>
  )
}
