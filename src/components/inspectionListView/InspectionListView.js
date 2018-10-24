import React from 'react'
import CheckCircleIcon from '@material-ui/icons/CheckCircle'
import Paper from '@material-ui/core/Paper'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction'
import Chip from '@material-ui/core/Chip'
import { inspectionTypes } from '../../constants/'
import { EmptyInspectionListPlaceholder } from '../emptyInspectionListPlaceholder/EmptyInspectionListPlaceholder'
import { ListAvatar } from '../listAvatar/ListAvatar'
import { StyledInspectionListView } from './StyledInspectionListView'

export const InspectionListView = ({
  inspections,
  emptyListText,
  selectedItems,
  handleButtonPress,
  handleButtonRelease,
}) => {
  return (
    <StyledInspectionListView className="StyledInspectionListView">
      {inspections.length > 0 ? (
        <Paper className="paper">
          <List component="nav" disablePadding>
            {inspections.map((inspection, index) => {
              const {
                id,
                inspectionNumber,
                cover,
                impactGeneralInfo,
                coverAdded,
                auditSummaryAdded,
                conditionRatingsAdded,
              } = inspection

              const { location, client, inspectionType } =
                cover || impactGeneralInfo

              const inspectionTypeUrl =
                inspectionType.value || inspectionTypes[0].value

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
                  onTouchEnd={() => handleButtonRelease(id, inspectionTypeUrl)}
                  onMouseDown={() => handleButtonPress(id)}
                  onMouseUp={() => handleButtonRelease(id, inspectionTypeUrl)}
                >
                  <ListAvatar
                    itemSelected={itemSelected}
                    text={inspectionNumber}
                  />

                  <ListItemText
                    primary={`${name}, ${suburb}`}
                    secondary={client}
                  />

                  <ListItemSecondaryAction className="secondary-actions">
                    {inspectionTypeUrl && (
                      <Chip
                        label={inspectionTypeUrl.substring(0, 4) + '...'}
                        className={`chip ${inspectionTypeUrl}`}
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
            })}
          </List>
        </Paper>
      ) : (
        <EmptyInspectionListPlaceholder text={emptyListText} />
      )}
    </StyledInspectionListView>
  )
}
