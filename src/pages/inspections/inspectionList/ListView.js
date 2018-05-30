import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import Typography from 'material-ui/Typography'
import CheckCircleIcon from 'material-ui-icons/CheckCircle'
import CheckIcon from 'material-ui-icons/Check'
import Paper from 'material-ui/Paper'
import List, {
  ListItem,
  ListItemText,
  ListItemSecondaryAction,
} from 'material-ui/List'
import Avatar from 'material-ui/Avatar'
import Chip from 'material-ui/Chip'

class ListViewWithout extends Component {
  handleClick = id => {
    const { selectMode, history, match } = this.props

    !selectMode && history.push(`${match.url}/edit/${id}`)
  }

  handleButtonPress = id => {
    const { setSelectedItems, selectedItems } = this.props

    this.buttonPressTimer = setTimeout(() => {
      if (selectedItems.find(item => item === id)) {
        setSelectedItems(selectedItems.filter(item => item !== id))
      } else {
        setSelectedItems([...selectedItems, id])
      }
    }, 300)
  }

  handleButtonRelease = id => {
    const { selectedItems, setSelectMode } = this.props

    clearTimeout(this.buttonPressTimer)

    if (selectedItems.length === 0) {
      this.handleClick(id)
      setSelectMode(false)
    } else {
      setSelectMode(true, selectedItems.length)
    }
  }

  render() {
    const { inspections, selectedItems } = this.props

    return inspections.length > 0 ? (
      <Paper className="paper">
        <List component="nav" disablePadding>
          {inspections.map(
            (
              {
                id,
                cover,
                inspectionNumber,
                coverAdded,
                auditSummaryAdded,
                conditionRatingsAdded,
                complianceIssuesAdded,
                maintenanceIssuesAdded,
              },
              index
            ) => {
              const { location, client, inspectionType } = cover
              const { name, suburb } = location
              const completed =
                coverAdded && auditSummaryAdded && conditionRatingsAdded

              const itemSelected = selectedItems.find(item => item === id)

              return (
                <ListItem
                  key={id}
                  divider
                  button
                  selected={itemSelected ? true : false}
                  className={`list-item ${itemSelected && 'selected'}`}
                  onTouchStart={() => this.handleButtonPress(id)}
                  onTouchEnd={() => this.handleButtonRelease(id)}
                  onMouseDown={() => this.handleButtonPress(id)}
                  onMouseUp={() => this.handleButtonRelease(id)}
                >
                  <Avatar className="avatar">
                    {itemSelected ? <CheckIcon /> : inspectionNumber}
                  </Avatar>
                  <ListItemText
                    primary={`${name}, ${suburb}`}
                    secondary={client}
                  />
                  <ListItemSecondaryAction className="secondary-actions">
                    {inspectionType && (
                      <Chip
                        label={inspectionType.substring(0, 4) + '...'}
                        className={`chip ${inspectionType.toLowerCase()}`}
                      />
                    )}
                    <CheckCircleIcon
                      style={{
                        visibility: completed ? '' : 'hidden',
                      }}
                      color="primary"
                      className="icon"
                    />
                  </ListItemSecondaryAction>
                </ListItem>
              )
            }
          )}
        </List>
      </Paper>
    ) : (
      <Typography variant="title" align="center">
        Try adding an inspection to get started!
      </Typography>
    )
  }
}

export const ListView = withRouter(ListViewWithout)
