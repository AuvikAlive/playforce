import React, { Component } from 'react'
import Paper from '@material-ui/core/Paper'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import Button from '@material-ui/core/Button'
import AddIcon from '@material-ui/icons/Add'
import DeleteIcon from '@material-ui/icons/Delete'
import { isEmpty } from 'react-redux-firebase'
import { StyledInspectionList } from './StyledInspectionList'
import { StyledNavLink } from '../../../components/styledNavLink/StyledNavLink'
import {
  contextTypesTitle,
  contextTypesUnsubscriber,
} from '../../../constants/'
import { showContentWhenLoaded } from '../../../functions/'
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

    return showContentWhenLoaded(
      inspectionsBySiteLoaded,
      <StyledInspectionList className="StyledInspectionList">
        <StyledNavLink to={match.url + '/addInspection'} className="add-icon">
          <Button variant="fab" color="primary" aria-label="add inspection">
            <AddIcon />
          </Button>
        </StyledNavLink>
        <Paper className="paper">
          <List component="nav" disablePadding>
            {isEmpty(inspectionsBySite) ? (
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
