import React, { Component } from 'react'
import PropTypes from 'prop-types'
import IconButton from 'material-ui/IconButton'
import ArrowBackIcon from 'material-ui-icons/ArrowBack'
import DeleteIcon from 'material-ui-icons/Delete'
import CheckCircleIcon from 'material-ui-icons/CheckCircle'
import Paper from 'material-ui/Paper'
import List, { ListItem, ListItemText } from 'material-ui/List'
import Button from 'material-ui/Button'
import { CircularProgress } from 'material-ui/Progress'
import { StyledInspectionItems } from './StyledInspectionItems'
import { StyledNavLink } from '../../../components/styledNavLink/StyledNavLink'

export class InspectionItems extends Component {
  state = {}

  componentDidMount() {
    const {
      setNavTitle,
      setLeftNavComponent,
      setRightNavComponent,
    } = this.context
    const { history, openModal } = this.props

    setNavTitle('Add Inspection')

    setLeftNavComponent(
      <IconButton color="inherit" aria-label="Search" onClick={history.goBack}>
        <ArrowBackIcon />
      </IconButton>,
    )

    setRightNavComponent(
      <IconButton
        color="inherit"
        aria-label="delete condition rating"
        onClick={() => openModal(this.delete)}
      >
        <DeleteIcon />
      </IconButton>,
    )
  }

  componentWillUnmount() {
    const {
      removeNavTitle,
      removeLefNavComponent,
      removeRightNavComponent,
    } = this.context

    removeNavTitle()
    removeLefNavComponent()
    removeRightNavComponent()
  }

  publish = async () => {
    const {
      inspection,
      setErrorLoadingState,
      history,
      firestore,
      userId,
      discardInspection,
    } = this.props

    const {
      coverAdded,
      auditSummaryAdded,
      conditionRatingsAdded,
      complianceIssuesAdded,
      maintenanceIssuesAdded,
    } = inspection

    if (
      auditSummaryAdded ||
      conditionRatingsAdded ||
      coverAdded ||
      complianceIssuesAdded ||
      maintenanceIssuesAdded
    ) {
      setErrorLoadingState({ error: '', loading: true })

      const {
        auditSummary,
        complianceIssues,
        conditionRatings,
        cover,
        maintenanceIssues,
      } = inspection

      try {
        await firestore.add(
          {
            collection: 'users',
            doc: userId,
            subcollections: [{ collection: 'inspections' }],
          },
          {
            auditSummary,
            complianceIssues,
            conditionRatings,
            cover,
            maintenanceIssues,
          },
        )

        discardInspection()
        history.goBack()
      } catch (error) {
        setErrorLoadingState({ error: error.message, loading: false })
      }
    } else {
      setErrorLoadingState({
        error: 'Please complete all the inspections correctly!',
        loading: false,
      })
    }
  }

  delete = () => {
    const { discardInspection, history } = this.props

    discardInspection()
    history.goBack()
  }

  render() {
    const { match, inspection, error, loading } = this.props

    const {
      auditSummaryAdded,
      complianceIssuesAdded,
      conditionRatingsAdded,
      coverAdded,
      maintenanceIssuesAdded,
    } = inspection

    return (
      <StyledInspectionItems className="StyledInspectionItems">
        <Paper>
          <List component="nav" disablePadding>
            <StyledNavLink to={`${match.url}/cover`}>
              <ListItem button>
                <ListItemText primary="Cover" />
                {coverAdded && <CheckCircleIcon color="primary" />}
              </ListItem>
            </StyledNavLink>

            <StyledNavLink to={`${match.url}/auditSummary`}>
              <ListItem button>
                <ListItemText primary="Audit Summary" />
                {auditSummaryAdded && <CheckCircleIcon color="primary" />}
              </ListItem>
            </StyledNavLink>

            <StyledNavLink to={`${match.url}/conditionRating`}>
              <ListItem button>
                <ListItemText primary="Condition Rating" />
                {conditionRatingsAdded && <CheckCircleIcon color="primary" />}
              </ListItem>
            </StyledNavLink>

            <StyledNavLink to={`${match.url}/complianceIssues`}>
              <ListItem button>
                <ListItemText primary="Identified Compliance Issues" />
                {complianceIssuesAdded && <CheckCircleIcon color="primary" />}
              </ListItem>
            </StyledNavLink>

            <StyledNavLink to={`${match.url}/maintenanceIssues`}>
              <ListItem button>
                <ListItemText primary="Identified Maintenance Issues" />
                {maintenanceIssuesAdded && <CheckCircleIcon color="primary" />}
              </ListItem>
            </StyledNavLink>

            <ListItem>{error && <p className="error">{error}</p>}</ListItem>

            {!error &&
              loading && (
                <div className="loading">
                  <CircularProgress />
                </div>
              )}

            {!loading && (
              <ListItem>
                <Button
                  fullWidth
                  variant="raised"
                  color="primary"
                  className="submit-button"
                  onClick={this.publish}
                >
                  Publish
                </Button>
              </ListItem>
            )}
          </List>
        </Paper>
      </StyledInspectionItems>
    )
  }
}

InspectionItems.contextTypes = {
  setNavTitle: PropTypes.func,
  removeNavTitle: PropTypes.func,
  setLeftNavComponent: PropTypes.func,
  removeLefNavComponent: PropTypes.func,
  setRightNavComponent: PropTypes.func,
  removeRightNavComponent: PropTypes.func,
}
