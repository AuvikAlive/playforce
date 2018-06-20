import React, { Component } from 'react'
import PropTypes from 'prop-types'
import IconButton from '@material-ui/core/IconButton'
import ArrowBackIcon from '@material-ui/icons/ArrowBack'
import Button from '@material-ui/core/Button'
import AddIcon from '@material-ui/icons/Add'
import ModeEditIcon from '@material-ui/icons/ModeEdit'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import CardContent from '@material-ui/core/CardContent'
import { StyledMaintenanceIssuesList } from './StyledMaintenanceIssuesList'
import { StyledNavLink } from '../../../components/styledNavLink/StyledNavLink'

export class MaintenanceIssuesList extends Component {
  state = {}

  componentDidMount() {
    const { setNavTitle, setLeftNavComponent } = this.context
    const {
      history,
      // maintenanceIssuesLoaded,
      // fetchMaintenanceIssuesRealTime,
      // userId,
      // inspectionId,
    } = this.props

    setNavTitle('Maintenance Issues')

    setLeftNavComponent(
      <IconButton color="inherit" aria-label="Search" onClick={history.goBack}>
        <ArrowBackIcon />
      </IconButton>
    )

    // !maintenanceIssuesLoaded &&
    //   fetchMaintenanceIssuesRealTime(userId, inspectionId)
  }

  componentWillUnmount() {
    const { removeNavTitle, removeLefNavComponent } = this.context

    removeNavTitle()
    removeLefNavComponent()
  }

  render() {
    const { match, maintenanceIssues } = this.props

    return (
      <StyledMaintenanceIssuesList className="StyledMaintenanceIssuesList">
        <StyledNavLink to={`${match.url}/add`} className="add-icon">
          <Button
            variant="fab"
            color="primary"
            aria-label="add compliance issue"
            className={
              !!maintenanceIssues && maintenanceIssues.length > 0 ? '' : 'pulse'
            }
          >
            <AddIcon />
          </Button>
        </StyledNavLink>

        {!!maintenanceIssues && maintenanceIssues.length > 0 ? (
          <Grid container>
            {maintenanceIssues.map(
              ({ id, images, finding, equipment }, index) => {
                return (
                  <Grid item key={id} xs={12}>
                    {images &&
                      images.length > 0 && (
                        <img src={images[0].image} alt="equipment type" />
                      )}
                    <CardContent className="card-content">
                      <StyledNavLink
                        to={`${match.url}/edit/${id}`}
                        className="edit-icon"
                      >
                        <Button
                          variant="fab"
                          color="primary"
                          aria-label="edit compliance issue"
                        >
                          <ModeEditIcon />
                        </Button>
                      </StyledNavLink>
                      <Typography variant="title">
                        Issue #: {index + 1}
                      </Typography>
                      <Typography variant="subheading">
                        Finding: {finding}
                      </Typography>
                      <Typography variant="subheading">
                        Equipment: {equipment}
                      </Typography>
                    </CardContent>
                  </Grid>
                )
              }
            )}
          </Grid>
        ) : (
          <Typography variant="title" align="center">
            Try adding an item to get started!
          </Typography>
        )}
      </StyledMaintenanceIssuesList>
    )
  }
}

MaintenanceIssuesList.contextTypes = {
  setNavTitle: PropTypes.func,
  removeNavTitle: PropTypes.func,
  setLeftNavComponent: PropTypes.func,
  removeLefNavComponent: PropTypes.func,
}
