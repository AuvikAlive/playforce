import React, { Component } from 'react'
import Button from '@material-ui/core/Button'
import ModeEditIcon from '@material-ui/icons/Edit'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import CardContent from '@material-ui/core/CardContent'
import { AddButton } from '../../../components/addButton/AddButton'
import { StyledNavLink } from '../../../components/styledNavLink/StyledNavLink'
import { EmptyListPlaceholder } from '../../../components/emptyListPlacehoder/EmptyListPlaceholder'
import {
  contextTypesTitleLeftNav,
  probabilities,
  severities,
} from '../../../constants/'
import {
  onComponentDidMountWithTitleLeftNav,
  onComponentWillUnmountWithTitleLeftNav,
  getRiskLevel,
} from '../../../functions/'
import { StyledComplianceIssuesList } from './StyledComplianceIssuesList'

export class ComplianceIssuesList extends Component {
  componentDidMount() {
    onComponentDidMountWithTitleLeftNav(this, 'Compliance Issues')
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
                    {images &&
                      images.length > 0 && (
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

                      {equipment && (
                        <Typography variant="subheading">
                          Equipment: {equipment}
                        </Typography>
                      )}

                      {playingSurface && (
                        <Typography variant="subheading">
                          Playing Surface: {playingSurface}
                        </Typography>
                      )}

                      <Typography variant="subheading">
                        Standards Clause: {standardsClause}
                      </Typography>

                      <Typography variant="headline">
                        Risk Assessment
                      </Typography>

                      <Grid container>
                        <Grid item xs={4}>
                          <Typography variant="subheading">
                            Probability:{' '}
                            {probabilities[probability - 1].probability}
                          </Typography>
                        </Grid>

                        <Grid item xs={4}>
                          <Typography variant="subheading">
                            Injury Severity:{' '}
                            {severities[severity - 1].serverity}
                          </Typography>
                        </Grid>

                        <Grid item xs={4}>
                          <Typography variant="subheading">
                            Risk Level: {getRiskLevel(probability, severity)}
                          </Typography>
                        </Grid>
                      </Grid>

                      <Typography variant="subheading">
                        Comments: {comments}
                      </Typography>

                      <Typography variant="subheading">
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

ComplianceIssuesList.contextTypes = contextTypesTitleLeftNav
