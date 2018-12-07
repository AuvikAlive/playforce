import React, { Component } from "react"
import Fab from "@material-ui/core/Fab"
import ModeEditIcon from "@material-ui/icons/Edit"
import Typography from "@material-ui/core/Typography"
import Grid from "@material-ui/core/Grid"
import CardContent from "@material-ui/core/CardContent"
import { NavContext } from "components/NavContextProvider/"
import { AddButton } from "../../../components/addButton/AddButton"
import { StyledNavLink } from "../../../components/styledNavLink/StyledNavLink"
import { EmptyListPlaceholder } from "../../../components/emptyListPlacehoder/EmptyListPlaceholder"
import { probabilities, severities } from "../../../constants/"
import {
  onComponentDidMountWithTitleLeftNav,
  onComponentWillUnmountWithTitleLeftNav,
  getRiskLevel,
} from "../../../functions/"
import { StyledComplianceIssuesList } from "./StyledComplianceIssuesList"

export class ComplianceIssuesList extends Component {
  componentDidMount() {
    onComponentDidMountWithTitleLeftNav(this, "Compliance Issues")
  }

  componentWillUnmount() {
    onComponentWillUnmountWithTitleLeftNav(this)
  }

  render() {
    const { match, complianceIssues } = this.props

    const complianceIssuesAdded =
      !!complianceIssues && complianceIssues.length > 0

    return (
      <StyledComplianceIssuesList className="StyledComplianceIssuesList">
        <AddButton to={`${match.url}/add`} pulse={!complianceIssuesAdded} />

        {complianceIssuesAdded ? (
          <Grid container>
            {complianceIssues.map(
              (
                {
                  id,
                  images,
                  finding,
                  equipment,
                  playingSurface,
                  standardsClause,
                  probability,
                  severity,
                  comments,
                  recommendations,
                },
                index
              ) => {
                return (
                  <Grid item key={index} xs={12}>
                    {images && images.length > 0 && (
                      <img
                        src={images[0].image}
                        className="card-media"
                        alt="compliance issue"
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

                      {equipment && (
                        <Typography variant="subtitle1">
                          Equipment: {equipment}
                        </Typography>
                      )}

                      {playingSurface && (
                        <Typography variant="subtitle1">
                          Playing Surface: {playingSurface}
                        </Typography>
                      )}

                      <Typography variant="subtitle1">
                        Standards Clause: {standardsClause}
                      </Typography>

                      <Typography variant="h5">Risk Assessment</Typography>

                      <Grid container>
                        <Grid item xs={4}>
                          <Typography variant="subtitle1">
                            Probability:{" "}
                            {probabilities[probability - 1].probability}
                          </Typography>
                        </Grid>

                        <Grid item xs={4}>
                          <Typography variant="subtitle1">
                            Injury Severity:{" "}
                            {severities[severity - 1].serverity}
                          </Typography>
                        </Grid>

                        <Grid item xs={4}>
                          <Typography variant="subtitle1">
                            Risk Level: {getRiskLevel(probability, severity)}
                          </Typography>
                        </Grid>
                      </Grid>

                      <Typography variant="subtitle1">
                        Comments: {comments}
                      </Typography>

                      <Typography variant="subtitle1">
                        Recommendations: {recommendations}
                      </Typography>
                    </CardContent>
                  </Grid>
                )
              }
            )}
          </Grid>
        ) : (
          <EmptyListPlaceholder text="Try adding a compliance issue to get started!" />
        )}
      </StyledComplianceIssuesList>
    )
  }
}

ComplianceIssuesList.contextType = NavContext
