import React, { Component } from 'react'
import Card, { CardContent } from 'material-ui/Card'
import Button from 'material-ui/Button'
import { CircularProgress } from 'material-ui/Progress'
import TextField from 'material-ui/TextField'
import { InputLabel } from 'material-ui/Input'
import { MenuItem } from 'material-ui/Menu'
import Grid from 'material-ui/Grid'
import { StyledCommonIssueForm } from './StyledCommonIssueForm'
import {
  probabilities,
  severities,
  riskLevels,
} from '../../../globals/constants'

export class CommonIssueForm extends Component {
  state = {
    issue: '',
    finding: '',
    standardsClause: '',
    probability: '',
    severity: '',
    comments: '',
    recommendations: '',
  }

  componentDidMount() {
    const { initialData } = this.props

    initialData && this.loadInitialData(initialData)
  }

  componentWillReceiveProps({ initialData }) {
    if (initialData && initialData !== this.props.initialData) {
      this.loadInitialData(initialData)
    }
  }

  loadInitialData = initialData => {
    this.setState({
      ...initialData,
    })
  }

  onInputChange = name => event => {
    this.setState({
      [name]: event.target.value,
    })
  }

  submit = async () => {
    const { onSubmit, afterSubmit, setFeedback } = this.props
    const {
      issue,
      finding,
      standardsClause,
      probability,
      severity,
      comments,
      recommendations,
    } = this.state

    if (
      (issue,
      finding &&
        standardsClause &&
        probability &&
        severity &&
        comments &&
        recommendations)
    ) {
      setFeedback({ error: '', loading: true })

      try {
        const result = await onSubmit({
          issue,
          finding,
          standardsClause,
          probability,
          severity,
          comments,
          recommendations,
        })

        setFeedback({ loading: false })
        afterSubmit && afterSubmit(result)
      } catch (error) {
        setFeedback({ error: error.message, loading: false })
      }
    } else {
      setFeedback({
        error: 'Please fill up the form correctly!',
      })
    }
  }

  render() {
    const {
      issue,
      finding,
      standardsClause,
      probability,
      severity,
      comments,
      recommendations,
    } = this.state

    const { error, loading, buttonText } = this.props

    const riskLevel =
      probability && severity ? riskLevels[probability - 1][severity - 1] : ''

    return (
      <StyledCommonIssueForm className={StyledCommonIssueForm}>
        <Card>
          <CardContent>
            <form noValidate>
              <TextField
                fullWidth
                label="Issue"
                value={issue}
                onChange={this.onInputChange('issue')}
                margin="normal"
              />

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
                label="Comments"
                value={comments}
                margin="normal"
                onChange={this.onInputChange('comments')}
              />

              <TextField
                fullWidth
                multiline
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
                onClick={this.submit}
              >
                {buttonText ? buttonText : 'Publish'}
              </Button>
            )}
          </CardContent>
        </Card>
      </StyledCommonIssueForm>
    )
  }
}
