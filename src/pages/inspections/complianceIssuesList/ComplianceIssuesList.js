import React, { Component } from 'react'
import Button from '@material-ui/core/Button'
import AddIcon from '@material-ui/icons/Add'
import ModeEditIcon from '@material-ui/icons/ModeEdit'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import CardContent from '@material-ui/core/CardContent'
import { StyledNavLink } from '../../../components/styledNavLink/StyledNavLink'
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
  state = {}

  componentDidMount() {
    const title = 'Compliance Issues'

    onComponentDidMountWithTitleLeftNav(this, title)
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
        <StyledNavLink to={`${match.url}/add`} className="add-icon">
          <Button
            variant="fab"
            color="primary"
            aria-label="add compliance issue"
            className={complianceIssuesAdded ? '' : 'pulse'}
          >
            <AddIcon />
          </Button>
        </StyledNavLink>

        {complianceIssuesAdded ? (
          <Grid container>
            {complianceIssues.map(
              (
                {
                  id,
                  images,
                  finding,
                  equipment,
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
          <Typography variant="title" align="center">
            Try adding an item to get started!
          </Typography>
        )}
      </StyledComplianceIssuesList>
    )
  }
}

ComplianceIssuesList.contextTypes = contextTypesTitleLeftNav
