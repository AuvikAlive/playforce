import React from 'react'
import Paper from '@material-ui/core/Paper'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction'
import IconButton from '@material-ui/core/IconButton'
import CheckIcon from '@material-ui/icons/Check'
import Typography from '@material-ui/core/Typography'

export const ListView = ({
  sites,
  selectedItems,
  handleButtonPress,
  handleButtonRelease,
}) => {
  return sites.length > 0 ? (
    <Paper className="paper">
      <List component="nav" disablePadding>
        {sites.map(({ name, id }, index, list) => {
          const itemSelected = selectedItems.find(item => item === id)
          return (
            <ListItem
              divider
              button
              key={id}
              selected={itemSelected ? true : false}
              className={`list-item ${itemSelected && 'selected'}`}
              onTouchStart={() => handleButtonPress(id)}
              onTouchEnd={() => handleButtonRelease(id)}
              onMouseDown={() => handleButtonPress(id)}
              onMouseUp={() => handleButtonRelease(id)}
            >
              <ListItemText primary={name} />
              <ListItemSecondaryAction className="secondary-actions">
                {itemSelected && (
                  <IconButton
                    color="inherit"
                    aria-label="More"
                    onClick={this.openMenu}
                  >
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
      Try adding a site to get started!
    </Typography>
  )
}
