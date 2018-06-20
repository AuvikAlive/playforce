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
import { StyledComplianceIssuesList } from './StyledComplianceIssuesList'
import { StyledNavLink } from '../../../components/styledNavLink/StyledNavLink'
import {
  probabilities,
  severities,
  riskLevels,
} from '../../../globals/constants'

export class ComplianceIssuesList extends Component {
  state = {}

  componentDidMount() {
    const { setNavTitle, setLeftNavComponent } = this.context
    const { history } = this.props

    setNavTitle('Compliance Issues')

    setLeftNavComponent(
      <IconButton color="inherit" aria-label="Search" onClick={history.goBack}>
        <ArrowBackIcon />
      </IconButton>
    )
  }

  componentWillUnmount() {
    const { removeNavTitle, removeLefNavComponent } = this.context

    removeNavTitle()
    removeLefNavComponent()
  }

  render() {
    const { match, complianceIssues } = this.props

    return (
      <StyledComplianceIssuesList className="StyledComplianceIssuesList">
        <StyledNavLink to={`${match.url}/add`} className="add-icon">
          <Button
            variant="fab"
            color="primary"
            aria-label="add compliance issue"
            className={
              !!complianceIssues && complianceIssues.length > 0 ? '' : 'pulse'
            }
          >
            <AddIcon />
          </Button>
        </StyledNavLink>

        {!!complianceIssues && complianceIssues.length > 0 ? (
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
                            Risk Level:{' '}
                            {riskLevels[probability - 1][severity - 1]}
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

ComplianceIssuesList.contextTypes = {
  setNavTitle: PropTypes.func,
  removeNavTitle: PropTypes.func,
  setLeftNavComponent: PropTypes.func,
  removeLefNavComponent: PropTypes.func,
}
