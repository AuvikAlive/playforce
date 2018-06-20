import React from 'react'
import { withRouter } from 'react-router-dom'
import Paper from '@material-ui/core/Paper'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction'
import IconButton from '@material-ui/core/IconButton'
import CheckIcon from '@material-ui/icons/Check'
import Typography from '@material-ui/core/Typography'

const ListViewWithout = ({
  sites,
  selectedItems,
  selectMode,
  setSelectedItems,
  setSelectMode,
  history,
  match,
}) => {
  const handleClick = id => {
    !selectMode && history.push(`/sites/${id}`)
  }

  const handleButtonPress = id => {
    this.buttonPressTimer = setTimeout(() => {
      if (selectedItems.find(item => item === id)) {
        setSelectedItems(selectedItems.filter(item => item !== id))
      } else {
        setSelectedItems([...selectedItems, id])
      }
    }, 300)
  }

  const handleButtonRelease = id => {
    clearTimeout(this.buttonPressTimer)

    if (selectedItems.length === 0) {
      handleClick(id)
      setSelectMode(false)
    } else {
      setSelectMode(true, selectedItems.length)
    }
  }

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

export const ListView = withRouter(ListViewWithout)
