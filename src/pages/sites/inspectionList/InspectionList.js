import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Paper from 'material-ui/Paper'
import List, { ListItem, ListItemText, ListItemIcon } from 'material-ui/List'
import Button from 'material-ui/Button'
import AddIcon from 'material-ui-icons/Add'
import DeleteIcon from 'material-ui-icons/Delete'
import { isEmpty } from 'react-redux-firebase'
import { LinearProgress } from 'material-ui/Progress'
import { StyledInspectionList } from './StyledInspectionList'
import { StyledNavLink } from '../../../components/styledNavLink/StyledNavLink'

export class InspectionList extends Component {
  state = { unsubscribe: undefined }

  async componentDidMount() {
    this.context.setNavTitle('Edit Site')

    const {
      inspectionsBySiteLoaded,
      fetchInspectionsBySiteRealTime,
      userId,
      siteId,
    } = this.props

    !inspectionsBySiteLoaded && fetchInspectionsBySiteRealTime(userId, siteId)
  }

  delete = async (index, inspectionId) => {
    const {
      inspectionsBySite,
      deleteInspection,
      userId,
      setFeedback,
    } = this.props
    const inspection = inspectionsBySite[index]

    await deleteInspection({
      inspection,
      userId,
      inspectionId,
    })
    setFeedback({ success: 'Inspection deleted!' })
  }

  render() {
    const {
      inspectionsBySiteLoaded,
      inspectionsBySite,
      openDialog,
    } = this.props

    if (inspectionsBySiteLoaded) {
      const { match } = this.props
      return (
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
                            openDialog(() => this.delete(index, id))
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
    } else {
      return <LinearProgress />
    }
  }
}

InspectionList.contextTypes = {
  setNavTitle: PropTypes.func,
  removeNavTitle: PropTypes.func,
}
