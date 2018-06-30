import React from 'react'
import Typography from '@material-ui/core/Typography'
import CheckCircleIcon from '@material-ui/icons/CheckCircle'
import CheckIcon from '@material-ui/icons/Check'
import Paper from '@material-ui/core/Paper'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction'
import Avatar from '@material-ui/core/Avatar'
import Chip from '@material-ui/core/Chip'

export const InspectionListView = ({
  inspections,
  selectedItems,
  handleButtonPress,
  handleButtonRelease,
}) => {
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
                onTouchStart={() => handleButtonPress(id)}
                onTouchEnd={() => handleButtonRelease(id)}
                onMouseDown={() => handleButtonPress(id)}
                onMouseUp={() => handleButtonRelease(id)}
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
