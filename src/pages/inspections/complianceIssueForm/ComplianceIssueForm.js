import React, { Component } from 'react'
import { LinearProgress } from 'material-ui/Progress'
import TextField from 'material-ui/TextField'
import { MenuItem } from 'material-ui/Menu'
import { InputLabel } from 'material-ui/Input'
import Grid from 'material-ui/Grid'
import Card, { CardContent } from 'material-ui/Card'
import Button from 'material-ui/Button'
import StayCurrentPortraitIcon from 'material-ui-icons/StayCurrentPortrait'
import values from 'lodash/values'
import {
  probabilities,
  severities,
  riskLevels,
} from '../../../globals/constants'
import { AutoComplete } from '../../../components/autoComplete/AutoComplete'
import { StyledComplianceIssueForm } from './StyledComplianceIssueForm'

export class ComplianceIssueForm extends Component {
  state = {
    commonIssues: [],
    commonIssueIndex: '',
    finding: '',
    equipment: '',
    standardsClause: '',
    probability: '',
    severity: '',
    comments: '',
    recommendations: '',
  }

  componentDidMount() {
    const { fetchCommonIssues, userId, initialData } = this.props

    fetchCommonIssues(userId)

    initialData && this.loadInitialData(initialData)
  }

  componentWillReceiveProps({ data }) {
    const commonIssues = data && data.commonIssues && values(data.commonIssues)

    if (commonIssues) {
      this.setState({ commonIssues })
    }
  }

  loadInitialData = complianceIssue => {
    const { setCapturedImage } = this.props
    const { image } = complianceIssue

    setCapturedImage(image)
    this.setState({
      ...complianceIssue,
    })
  }

  onFindingChange = event => {
    const commonIssueIndex = event.target.value
    const {
      finding,
      standardsClause,
      probability,
      severity,
      comments,
      recommendations,
    } = this.props.commonIssues[commonIssueIndex]

    this.setState({
      finding,
      commonIssueIndex,
      standardsClause,
      probability,
      severity,
      comments,
      recommendations,
    })
  }

  onInputChange = name => event => {
    this.setState({
      [name]: event.target.value,
    })
  }

  onAutoCompleteChange = value => {
    this.setState({ equipment: value })
  }

  onSubmit = () => {
    const {
      finding,
      equipment,
      standardsClause,
      probability,
      severity,
      comments,
      recommendations,
    } = this.state

    const { onSubmit, setErrorLoadingState, image } = this.props

    if (
      image &&
      finding &&
      equipment &&
      standardsClause &&
      probability &&
      severity &&
      comments &&
      recommendations
    ) {
      setErrorLoadingState({ error: '' })
      onSubmit({
        image,
        finding,
        equipment,
        standardsClause,
        probability,
        severity,
        comments,
        recommendations,
      })
    } else {
      setErrorLoadingState({
        error: 'Please fill up the form correctly!',
      })
    }
  }

  render() {
    const {
      commonIssuesLoaded,
      commonIssues,
      image,
      captureImage,
      equipments,
      error,
    } = this.props

    const {
      commonIssueIndex,
      finding,
      equipment,
      standardsClause,
      probability,
      severity,
      comments,
      recommendations,
    } = this.state

    const riskLevel =
      probability && severity ? riskLevels[probability - 1][severity - 1] : ''

    return commonIssuesLoaded ? (
      <StyledComplianceIssueForm className="StyledComplianceIssueForm">
        <Card>
          {image && <img src={image} alt="equipment type" />}
          <CardContent>
            <Button
              fullWidth
              variant="raised"
              color="primary"
              className="submit-button"
              onClick={() => captureImage({ aspectRatio: 9 / 16 })}
            >
              Capture Image
              <StayCurrentPortraitIcon className="button-icon" />
            </Button>

            <form noValidate>
              <AutoComplete
                onChange={this.onAutoCompleteChange}
                domain={equipments}
                label="Equipment"
                value={equipment}
              />

              <TextField
                fullWidth
                select
                label="Select a common issue"
                value={commonIssueIndex}
                onChange={this.onFindingChange}
                margin="normal"
              >
                {commonIssues.length > 0 ? (
                  commonIssues.map(({ finding }, index) => (
                    <MenuItem key={index} value={index}>
                      {finding}
                    </MenuItem>
                  ))
                ) : (
                  <MenuItem value={''}>No common issue added</MenuItem>
                )}
              </TextField>

              <TextField
                fullWidth
                multiline
                rows="3"
                label="Finding"
                value={finding}
                margin="normal"
                onChange={this.onInputChange('finding')}
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

            <Button
              fullWidth
              variant="raised"
              color="primary"
              className="submit-button"
              onClick={this.onSubmit}
            >
              save
            </Button>
          </CardContent>
        </Card>
      </StyledComplianceIssueForm>
    ) : (
      <LinearProgress />
    )
  }
}
