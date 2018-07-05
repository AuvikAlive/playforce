import React, { Component } from 'react'
import Button from '@material-ui/core/Button'
import AddIcon from '@material-ui/icons/Add'
import ModeEditIcon from '@material-ui/icons/ModeEdit'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import CardContent from '@material-ui/core/CardContent'
import { StyledNavLink } from '../../../components/styledNavLink/StyledNavLink'
import { contextTypesTitleLeftNav } from '../../../constants/'
import {
  onComponentDidMountWithTitleLeftNav,
  onComponentWillUnmountWithTitleLeftNav,
} from '../../../functions/'
import { StyledMaintenanceIssuesList } from './StyledMaintenanceIssuesList'

export class MaintenanceIssuesList extends Component {
  state = {}

  componentDidMount() {
    const title = 'Maintenance Issues'

    onComponentDidMountWithTitleLeftNav(this, title)
  }

  componentWillUnmount() {
    onComponentWillUnmountWithTitleLeftNav(this)
  }

  render() {
    const { match, maintenanceIssues } = this.props
    const maintenanceIssuesAdded =
      !!maintenanceIssues && maintenanceIssues.length > 0

    return (
      <StyledMaintenanceIssuesList className="StyledMaintenanceIssuesList">
        <StyledNavLink to={`${match.url}/add`} className="add-icon">
          <Button
            variant="fab"
            color="primary"
            aria-label="add compliance issue"
            className={maintenanceIssuesAdded ? '' : 'pulse'}
          >
            <AddIcon />
          </Button>
        </StyledNavLink>

        {maintenanceIssuesAdded ? (
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

MaintenanceIssuesList.contextTypes = contextTypesTitleLeftNav
