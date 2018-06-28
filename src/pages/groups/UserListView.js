import React from 'react'
import Paper from '@material-ui/core/Paper'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction'
import IconButton from '@material-ui/core/IconButton'
import CheckIcon from '@material-ui/icons/Check'
import Typography from '@material-ui/core/Typography'

export const UserListView = ({
  users,
  selectedItems,
  handleButtonPress,
  handleButtonRelease,
}) => {
  return users.length > 0 ? (
    <Paper className="paper">
      <List component="nav" disablePadding>
        {users.map(user => {
          const itemSelected = selectedItems.find(item => item.id === user.id)

          return (
            <ListItem
              divider
              button
              key={user.id}
              selected={itemSelected ? true : false}
              className={`list-item ${itemSelected && 'selected'}`}
              onTouchStart={() => handleButtonPress(user)}
              onTouchEnd={() => handleButtonRelease(user)}
              onMouseDown={() => handleButtonPress(user)}
              onMouseUp={() => handleButtonRelease(user)}
            >
              <ListItemText primary={user.displayName} />
              <ListItemSecondaryAction className="secondary-actions">
                {itemSelected && (
                  <IconButton color="inherit" aria-label="selected">
                    <CheckIcon />
                  </IconButton>
                )}
              </ListItemSecondaryAction>
            </ListItem>
          )
        })}
      </List>
    </Paper>
  ) : (
    <Typography variant="title" align="center">
      Try adding a member to get started!
    </Typography>
  )
}
