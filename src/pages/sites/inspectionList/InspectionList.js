import React, { Component } from 'react'
import Paper from '@material-ui/core/Paper'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import DeleteIcon from '@material-ui/icons/Delete'
import { isEmpty } from 'react-redux-firebase'
import { AddButton } from '../../../components/addButton/AddButton'
import {
  contextTypesTitle,
  contextTypesUnsubscriber,
} from '../../../constants/'
import { showContentWhenLoaded } from '../../../functions/'
import { StyledInspectionList } from './StyledInspectionList'
import { onComponentDidMount, deleteInspection } from './functions/'

export class InspectionList extends Component {
  componentDidMount() {
    onComponentDidMount(this)
  }

  render() {
    const {
      inspectionsBySiteLoaded,
      inspectionsBySite,
      openDialog,
      match,
    } = this.props

    const inspectionsAdded = !isEmpty(inspectionsBySite)

    return showContentWhenLoaded(
      inspectionsBySiteLoaded,
      <StyledInspectionList className="StyledInspectionList">
        <AddButton to={match.url + '/addInspection'} pulse={inspectionsAdded} />

        <Paper className="paper">
          <List component="nav" disablePadding>
            {inspectionsAdded ? (
              <ListItem>
                <ListItemText primary="No inspection added" />
              </ListItem>
            ) : (
              inspectionsBySite.map(
                ({ type, id, inspectionNumber }, index, list) => {
                  return (
                    <ListItem divider button key={id}>
                      <ListItemText
                        primary={`Inspection #${inspectionNumber}`}
                      />
                      <ListItemIcon
                        onClick={() =>
                          openDialog(deleteInspection(this, index, id))
                        }
                      >
                        <DeleteIcon />
                      </ListItemIcon>
                    </ListItem>
                  )
                }
              )
            )}
          </List>
        </Paper>
      </StyledInspectionList>
    )
  }
}

InspectionList.contextTypes = {
  ...contextTypesTitle,
  ...contextTypesUnsubscriber,
}
