import React, { Component } from 'react'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Button from '@material-ui/core/Button'
import CircularProgress from '@material-ui/core/CircularProgress'
import TextField from '@material-ui/core/TextField'
import InputLabel from '@material-ui/core/InputLabel'
import MenuItem from '@material-ui/core/MenuItem'
import Grid from '@material-ui/core/Grid'
import { onEventInputChange } from '../../../utilities/onEventInputChange'
import {
  probabilities,
  severities,
  riskLevels,
} from '../../../globals/constants'
import { StyledCommonIssueForm } from './StyledCommonIssueForm'

export class CommonIssueForm extends Component {
  state = {
    issue: '',
    category: '',
    finding: '',
    standardsClause: '',
    implementationDate: '',
    preImplementationText: '',
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

  onEventInputChange = onEventInputChange

  submit = async () => {
    const { onSubmit, afterSubmit, setFeedback } = this.props
    const {
      issue,
      category,
      finding,
      standardsClause,
      implementationDate,
      preImplementationText,
      probability,
      severity,
      comments,
      recommendations,
    } = this.state

    if (
      (issue,
      finding &&
        standardsClause &&
        implementationDate &&
        preImplementationText &&
        probability &&
        severity &&
        comments &&
        recommendations)
    ) {
      setFeedback({ error: '', loading: true })

      try {
        const result = await onSubmit({
          issue,
          category,
          finding,
          standardsClause,
          implementationDate,
          preImplementationText,
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
      category,
      finding,
      standardsClause,
      implementationDate,
      preImplementationText,
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
                onChange={this.onEventInputChange('issue')}
                margin="normal"
              />

              <TextField
                fullWidth
                label="Category"
                value={category}
                onChange={this.onEventInputChange('category')}
                margin="normal"
              />

              <TextField
                fullWidth
                label="Finding"
                value={finding}
                onChange={this.onEventInputChange('finding')}
                margin="normal"
              />

              <TextField
                fullWidth
                label="Standards Clause"
                value={standardsClause}
                onChange={this.onEventInputChange('standardsClause')}
                margin="normal"
              />

              <TextField
                fullWidth
                label="Implementation Date"
                value={implementationDate}
                onChange={this.onEventInputChange('implementationDate')}
                margin="normal"
              />

              <TextField
                fullWidth
                multiline
                label="Pre-implementation Text"
                value={preImplementationText}
                margin="normal"
                onChange={this.onEventInputChange('preImplementationText')}
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
                    onChange={this.onEventInputChange('probability')}
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
                    onChange={this.onEventInputChange('severity')}
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
                onChange={this.onEventInputChange('comments')}
              />

              <TextField
                fullWidth
                multiline
                label="Recommendations"
                value={recommendations}
                margin="normal"
                onChange={this.onEventInputChange('recommendations')}
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
