import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Paper from '@material-ui/core/Paper'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import Button from '@material-ui/core/Button'
import AddIcon from '@material-ui/icons/Add'
import DeleteIcon from '@material-ui/icons/Delete'
import { isEmpty } from 'react-redux-firebase'
import LinearProgress from '@material-ui/core/LinearProgress'
import { StyledInspectionList } from './StyledInspectionList'
import { StyledNavLink } from '../../../components/styledNavLink/StyledNavLink'

export class InspectionList extends Component {
  async componentDidMount() {
    const { setNavTitle, addUnsubscriber } = this.context

    const {
      inspectionsBySiteLoaded,
      fetchInspectionsBySiteRealTime,
      userId,
      siteId,
    } = this.props

    setNavTitle('Edit Site')

    !inspectionsBySiteLoaded &&
      addUnsubscriber(await fetchInspectionsBySiteRealTime(userId, siteId))
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
  addUnsubscriber: PropTypes.func,
}
