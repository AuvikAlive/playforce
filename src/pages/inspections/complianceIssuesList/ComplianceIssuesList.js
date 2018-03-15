import React, { Component } from 'react'
import PropTypes from 'prop-types'
import IconButton from 'material-ui/IconButton'
import ArrowBackIcon from 'material-ui-icons/ArrowBack'
import Button from 'material-ui/Button'
import AddIcon from 'material-ui-icons/Add'
import Typography from 'material-ui/Typography'
import Grid from 'material-ui/Grid'
import Card, { CardContent, CardMedia } from 'material-ui/Card'
import { StyledComplianceIssuesList } from './StyledComplianceIssuesList'
import { StyledNavLink } from '../../../components/styledNavLink/StyledNavLink'

export class ComplianceIssuesList extends Component {
  state = {}

  componentDidMount() {
    const { setNavTitle, setLeftNavComponent } = this.context
    const { history } = this.props

    setNavTitle('Identified Compliance Issues')

    setLeftNavComponent(
      <IconButton color="inherit" aria-label="Search" onClick={history.goBack}>
        <ArrowBackIcon />
      </IconButton>,
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
            className={complianceIssues.length ? '' : 'pulse'}
          >
            <AddIcon />
          </Button>
        </StyledNavLink>

        {complianceIssues.length ? (
          <Grid container>
            {complianceIssues.map(
              (
                {
                  image,
                  finding,
                  standardsClause,
                  probability,
                  severity,
                  riskLevel,
                  comments,
                  recommendations,
                },
                index,
              ) => {
                return (
                  <Grid item key={index} xs={12} sm={6}>
                    <Card>
                      {image && (
                        <CardMedia className="card-media" image={image} />
                      )}
                    </Card>
                    <CardContent>
                      <Typography variant="title">
                        Issue #: {index + 1}
                      </Typography>
                      <Typography variant="subheading">
                        Finding: {finding}
                      </Typography>
                      <Typography variant="subheading">
                        Standards Clause: {standardsClause}
                      </Typography>
                      <Typography variant="headline">
                        Risk Assessment
                      </Typography>
                      <Typography variant="subheading">
                        Probability: {probability}
                      </Typography>
                      <Typography variant="subheading">
                        Injury Severity: {severity}
                      </Typography>
                      <Typography variant="subheading">
                        Risk Level: {riskLevel}
                      </Typography>
                      <Typography variant="subheading">
                        Comments: {comments}
                      </Typography>
                      <Typography variant="subheading">
                        Recommendations: {recommendations}
                      </Typography>
                    </CardContent>
                  </Grid>
                )
              },
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
