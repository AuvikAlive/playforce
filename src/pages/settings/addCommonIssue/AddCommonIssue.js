import React, { Component } from 'react'
import PropTypes from 'prop-types'
import IconButton from 'material-ui/IconButton'
import ArrowBackIcon from 'material-ui-icons/ArrowBack'
import Card, { CardContent } from 'material-ui/Card'
import Button from 'material-ui/Button'
import { CircularProgress } from 'material-ui/Progress'
import TextField from 'material-ui/TextField'
import { InputLabel } from 'material-ui/Input'
import { MenuItem } from 'material-ui/Menu'
import Grid from 'material-ui/Grid'
import { StyledAddCommonIssue } from './StyledAddCommonIssue'
import { probabilities, severities, riskLevels } from '../../../globals/scales'

export class AddCommonIssue extends Component {
  state = {
    finding: '',
    standardsClause: '',
    probability: '',
    severity: '',
    comments: '',
    recommendations: '',
  }

  componentDidMount() {
    const { setNavTitle, setLeftNavComponent } = this.context
    const { history } = this.props

    setNavTitle('Add a Common Issue')

    setLeftNavComponent(
      <IconButton color="inherit" aria-label="go back" onClick={history.goBack}>
        <ArrowBackIcon />
      </IconButton>,
    )
  }

  componentWillUnmount() {
    const { removeNavTitle, removeLefNavComponent } = this.context

    removeNavTitle()
    removeLefNavComponent()
  }

  onInputChange = name => event => {
    this.setState({
      [name]: event.target.value,
    })
  }

  publish = async () => {
    const {
      finding,
      standardsClause,
      probability,
      severity,
      comments,
      recommendations,
    } = this.state
    const { firestore, userId, setErrorLoadingState, history } = this.props

    if (
      finding &&
      standardsClause &&
      probability &&
      severity &&
      comments &&
      recommendations
    ) {
      setErrorLoadingState({ error: '', loading: true })

      try {
        await firestore.add(
          {
            collection: 'users',
            doc: userId,
            subcollections: [{ collection: 'commonIssues' }],
          },
          {
            finding,
            standardsClause,
            probability,
            severity,
            comments,
            recommendations,
          },
        )
        setErrorLoadingState({ loading: false })
        history.goBack()
      } catch (error) {
        setErrorLoadingState({ error: error.message, loading: false })
      }
    } else {
      setErrorLoadingState({
        error: 'Please fill up the form correctly!',
        loading: false,
      })
    }
  }

  render() {
    const {
      finding,
      standardsClause,
      probability,
      severity,
      comments,
      recommendations,
    } = this.state

    const { error, loading } = this.props

    const riskLevel =
      probability && severity ? riskLevels[probability - 1][severity - 1] : ''

    return (
      <StyledAddCommonIssue className="StyledAddCommonIssue">
        <Card>
          <CardContent>
            <form noValidate>
              <TextField
                fullWidth
                label="Finding"
                value={finding}
                onChange={this.onInputChange('finding')}
                margin="normal"
              />

              <TextField
                fullWidth
                label="Standards Clause"
                value={standardsClause}
                onChange={this.onInputChange('standardsClause')}
                margin="normal"
              />

              <Grid container>
                <Grid item xs={12}>
                  <InputLabel className="risk-assessment">
                    Risk Assessment
                  </InputLabel>
                </Grid>
                <Grid item xs={4}>
                  <TextField
                    fullWidth
                    select
                    label="Probability"
                    value={probability}
                    onChange={this.onInputChange('probability')}
                    margin="normal"
                  >
                    {probabilities.map(({ probability, value }, index) => (
                      <MenuItem key={index} value={value}>
                        {probability}
                      </MenuItem>
                    ))}
                  </TextField>
                </Grid>
                <Grid item xs={4}>
                  <TextField
                    fullWidth
                    select
                    label="Injury Severity"
                    value={severity}
                    onChange={this.onInputChange('severity')}
                    margin="normal"
                  >
                    {severities.map(({ serverity, value }, index) => (
                      <MenuItem key={index} value={value}>
                        {serverity}
                      </MenuItem>
                    ))}
                  </TextField>
                </Grid>
                <Grid item xs={4}>
                  <TextField
                    disabled
                    label="Risk Level"
                    value={riskLevel}
                    margin="normal"
                  />
                </Grid>
              </Grid>

              <TextField
                fullWidth
                multiline
                rows="3"
                label="Comments"
                value={comments}
                margin="normal"
                onChange={this.onInputChange('comments')}
              />

              <TextField
                fullWidth
                multiline
                rows="3"
                label="Recommendations"
                value={recommendations}
                margin="normal"
                onChange={this.onInputChange('recommendations')}
              />
            </form>

            {error && <p className="error">{error}</p>}

            {!error &&
              loading && (
                <div className="loading">
                  <CircularProgress />
                </div>
              )}

            {!loading && (
              <Button
                fullWidth
                variant="raised"
                color="primary"
                className="submit-button"
                onClick={this.publish}
              >
                Publish Issue
              </Button>
            )}
          </CardContent>
        </Card>
      </StyledAddCommonIssue>
    )
  }
}

AddCommonIssue.contextTypes = {
  setNavTitle: PropTypes.func,
  removeNavTitle: PropTypes.func,
  setLeftNavComponent: PropTypes.func,
  removeLefNavComponent: PropTypes.func,
}
