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

class ListViewWithout extends Component {
  state = {
    selectedItems: [],
    selectMode: false,
  }

  handleClick = id => {
    const { selectMode } = this.state
    const { history, match } = this.props

    !selectMode && history.push(`${match.url}/edit/${id}`)
  }

  handleButtonPress = id => {
    this.buttonPressTimer = setTimeout(() => {
      const { selectedItems } = this.state

      if (selectedItems.find(item => item === id)) {
        this.setState({
          selectedItems: selectedItems.filter(item => item !== id),
        })
      } else {
        this.setState({ selectedItems: [...selectedItems, id] })
      }
    }, 300)
  }

  handleButtonRelease = id => {
    const { selectedItems } = this.state
    clearTimeout(this.buttonPressTimer)

    if (selectedItems.length === 0) {
      this.handleClick(id)
      this.setState({ selectMode: false })
    } else {
      this.setState({ selectMode: true })
    }
  }

  render() {
    const { inspections } = this.props
    const { selectedItems } = this.state

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
              const { location, client } = cover
              const { name, suburb } = location
              // const reportTypes = [
              //   'Comprehensive',
              //   'Operational',
              //   'Routine',
              // ]
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
                    {/* <Chip
                        label={
                          reportTypes[index % 3].substring(0, 4) + '...'
                        }
                        className={`chip ${reportTypes[
                          index % 3
                        ].toLowerCase()}`}
                      /> */}
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
