import React, { Component } from "react"
import Fab from "@material-ui/core/Fab"
import ModeEditIcon from "@material-ui/icons/Edit"
import Typography from "@material-ui/core/Typography"
import Grid from "@material-ui/core/Grid"
import CardContent from "@material-ui/core/CardContent"
import { AddButton } from "../../../components/addButton/AddButton"
import { StyledNavLink } from "../../../components/styledNavLink/StyledNavLink"
import { EmptyListPlaceholder } from "../../../components/emptyListPlacehoder/EmptyListPlaceholder"
import { NavContext } from "components/NavContextProvider/"
import {
  onComponentDidMountWithTitleLeftNav,
  onComponentWillUnmountWithTitleLeftNav,
} from "../../../functions/"
import { StyledMaintenanceIssuesList } from "./StyledMaintenanceIssuesList"

export class MaintenanceIssuesList extends Component {
  componentDidMount() {
    onComponentDidMountWithTitleLeftNav(this, "Maintenance Issues")
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
        <AddButton to={`${match.url}/add`} pulse={!maintenanceIssuesAdded} />

        {maintenanceIssuesAdded ? (
          <Grid container>
            {maintenanceIssues.map(
              ({ id, images, finding, equipment }, index) => {
                return (
                  <Grid item key={id} xs={12}>
                    {images && images.length > 0 && (
                      <img
                        src={images[0].image}
                        className="card-media"
                        alt="maintenance issue"
                      />
                    )}
                    <CardContent className="card-content">
                      <StyledNavLink
                        to={`${match.url}/edit/${id}`}
                        className="floating-icon"
                      >
                        <Fab color="primary" aria-label="edit compliance issue">
                          <ModeEditIcon />
                        </Fab>
                      </StyledNavLink>
                      <Typography variant="h6">Issue #: {index + 1}</Typography>
                      <Typography variant="subtitle1">
                        Finding: {finding}
                      </Typography>
                      <Typography variant="subtitle1">
                        Equipment: {equipment}
                      </Typography>
                    </CardContent>
                  </Grid>
                )
              }
            )}
          </Grid>
        ) : (
          <EmptyListPlaceholder text="Try adding a maintenance issue to get started!" />
        )}
      </StyledMaintenanceIssuesList>
    )
  }
}

MaintenanceIssuesList.contextType = NavContext
