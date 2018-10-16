import React from 'react'
import CheckCircleIcon from '@material-ui/icons/CheckCircle'
import Paper from '@material-ui/core/Paper'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction'
import Chip from '@material-ui/core/Chip'
// import { List as VirtulalList } from 'react-virtualized'
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
                    onTouchEnd={() => handleButtonRelease(id, inspectionType)}
                    onMouseDown={() => handleButtonPress(id)}
                    onMouseUp={() => handleButtonRelease(id, inspectionType)}
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
            {/* <VirtulalList
              width={568}
              height={69 * inspections.length}
              rowCount={inspections.length}
              rowHeight={69}
              rowRenderer={({ key, index, isScrolling, isVisible, style }) => {
                const {
                  id,
                  cover,
                  inspectionNumber,
                  coverAdded,
                  auditSummaryAdded,
                  conditionRatingsAdded,
                } = inspections[index]

                const { location, client, inspectionType } = cover
                const { name, suburb } = location
                const completed =
                  coverAdded && auditSummaryAdded && conditionRatingsAdded

                const itemSelected = selectedItems.find(item => item === id)

                return (
                  <div key={key} style={style}>
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
                      <InspectionListAvatar
                        itemSelected={itemSelected}
                        text={inspectionNumber}
                      />

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
                  </div>
                )
              }}
            /> */}
          </List>
        </Paper>
      ) : (
        <EmptyInspectionListPlaceholder text={emptyListText} />
      )}
    </StyledInspectionListView>
  )
}
