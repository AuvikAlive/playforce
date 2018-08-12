import React, { Component } from 'react'
import Paper from '@material-ui/core/Paper'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import DeleteIcon from '@material-ui/icons/Delete'
import { isEmpty } from 'react-redux-firebase'
import { AddButton } from '../../../components/addButton/AddButton'
import { StyledNavLink } from '../../../components/styledNavLink/StyledNavLink'
import { EmptyInspectionListPlaceholder } from '../../../components/emptyInspectionListPlaceholder/EmptyInspectionListPlaceholder'
import { InspectionListAvatar } from '../../../components/inspectionListAvatar/InspectionListAvatar'
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
    } = this.props

    const inspectionsAdded = !isEmpty(inspectionsBySite)

    return showContentWhenLoaded(
      inspectionsBySiteLoaded,
      <StyledInspectionList className="StyledInspectionList">
        <AddButton to="/inspections/add" pulse={!inspectionsAdded} />

        {inspectionsAdded ? (
          <Paper className="paper">
            <List component="nav" disablePadding>
              {inspectionsBySite.map(
                ({ id, inspectionNumber, cover }, index, list) => {
                  const { location, client } = cover
                  const { name, suburb } = location

                  return (
                    <StyledNavLink to={`/inspections/edit/${id}`} key={id}>
                      <ListItem divider button>
                        <InspectionListAvatar text={inspectionNumber} />
                        <ListItemText
                          primary={`${name}, ${suburb}`}
                          secondary={client}
                        />
                        <ListItemIcon
                          onClick={() =>
                            openDialog(deleteInspection(this, index, id))
                          }
                        >
                          <DeleteIcon />
                        </ListItemIcon>
                      </ListItem>
                    </StyledNavLink>
                  )
                }
              )}
            </List>
          </Paper>
        ) : (
          <EmptyInspectionListPlaceholder />
        )}
      </StyledInspectionList>
    )
  }
}

InspectionList.contextTypes = {
  ...contextTypesTitle,
  ...contextTypesUnsubscriber,
}
