import React, { Component } from 'react'
import PropTypes from 'prop-types'
import IconButton from 'material-ui/IconButton'
import ArrowBackIcon from 'material-ui-icons/ArrowBack'
import Card, { CardContent, CardMedia } from 'material-ui/Card'
import Button from 'material-ui/Button'
import TextField from 'material-ui/TextField'
import { MenuItem } from 'material-ui/Menu'
import Typography from 'material-ui/Typography'
import Grid from 'material-ui/Grid'
import { StyledAddCompliaceIssue } from './StyledAddComplianceIssue'

const findings = ['Finding 1', 'Finding 2', 'Finding 3']
const probabilities = [
  { probability: 'A', value: 1 },
  { probability: 'B', value: 2 },
  { probability: 'C', value: 3 },
  { probability: 'D', value: 4 },
  { probability: 'E', value: 5 },
]
const severities = [1, 2, 3, 4, 5]
const riskLevels = [
  ['VL (1)', 'VL (2)', 'L (8)', 'L (9)', 'M (14)'],
  ['VL (3)', 'VL (4)', 'L (10)', 'M (15)', 'M (17)'],
  ['VL (5)', 'L (11)', 'M (16)', 'H (19)', 'H (20)'],
  ['VL (6)', 'L (12)', 'M (18)', 'H (21)', 'VH (23)'],
  ['VL (7)', 'L (13)', 'H (22)', 'VH (24)', 'VH (25)'],
]

export class AddComplianceIssue extends Component {
  state = {
    image: null,
    finding: '',
    standardsClause: '',
    probability: '',
    severity: '',
    comments: '',
    recommendations: '',
    customFinding: false,
  }

  componentDidMount() {
    const { setNavTitle, setLeftNavComponent } = this.context

    setNavTitle('Add Compliance Issue')

    setLeftNavComponent(
      <IconButton
        color="inherit"
        aria-label="go back"
        onClick={this.addComplianceIssue}
      >
        <ArrowBackIcon />
      </IconButton>,
    )
  }

  componentWillUnmount() {
    const { removeNavTitle, removeLefNavComponent } = this.context

    removeNavTitle()
    removeLefNavComponent()
  }

  capture = () => {
    this.fileInput.click()
  }

  getFile = event => {
    const reader = new FileReader()

    reader.readAsDataURL(event.target.files[0])

    reader.addEventListener(
      'load',
      () => {
        this.setState({ image: reader.result })
      },
      false,
    )
  }

  onFindingChange = event => {
    const finding = event.target.value
    const standardsClause = `${finding} related standard`

    this.setState({ finding, standardsClause })
  }

  onInputChange = name => event => {
    this.setState({
      [name]: event.target.value,
    })
  }

  toggleCustomFinding = () => {
    const { customFinding } = this.state

    this.setState({
      customFinding: !customFinding,
      finding: '',
      standardsClause: '',
    })
  }

  addComplianceIssue = () => {
    const { history, addComplianceIssue } = this.props
    const {
      image,
      finding,
      standardsClause,
      probability,
      severity,
      comments,
      recommendations,
    } = this.state

    if (
      image &&
      finding &&
      standardsClause &&
      probability &&
      severity &&
      comments &&
      recommendations
    ) {
      addComplianceIssue({
        image,
        finding,
        standardsClause,
        probability: probabilities[probability - 1].probability,
        severity,
        riskLevel: riskLevels[probability - 1][severity - 1],
        comments,
        recommendations,
      })
    }

    history.goBack()
  }

  render() {
    const {
      image,
      finding,
      standardsClause,
      probability,
      severity,
      comments,
      recommendations,
      customFinding,
    } = this.state

    const riskLevel =
      probability && severity ? riskLevels[probability - 1][severity - 1] : ''

    return (
      <StyledAddCompliaceIssue className="StyledAddCompliaceIssue">
        <Card>
          {image && <CardMedia className="card-media" image={image} />}
          <CardContent>
            <Button
              fullWidth
              variant="raised"
              color="primary"
              className="submit-button"
              onClick={this.capture}
            >
              Capture Image
            </Button>
            <form noValidate>
              {!customFinding && (
                <TextField
                  fullWidth
                  select
                  label="Finding"
                  value={finding}
                  onChange={this.onFindingChange}
                  margin="normal"
                >
                  {findings.map(item => (
                    <MenuItem key={item} value={item}>
                      {item}
                    </MenuItem>
                  ))}
                </TextField>
              )}

              {customFinding && (
                <TextField
                  fullWidth
                  multiline
                  rows="3"
                  label="Finding"
                  value={finding}
                  margin="normal"
                  onChange={this.onInputChange('finding')}
                />
              )}

              <Button
                fullWidth
                variant="raised"
                color="primary"
                className="submit-button"
                onClick={this.toggleCustomFinding}
              >
                {customFinding ? 'Set Commong Findings' : 'Set Custom Finding'}
              </Button>

              {!customFinding && (
                <TextField
                  fullWidth
                  disabled
                  label="Standards Clause"
                  value={standardsClause}
                  margin="normal"
                />
              )}

              {customFinding && (
                <TextField
                  fullWidth
                  multiline
                  rows="3"
                  label="Standards Clause"
                  value={standardsClause}
                  margin="normal"
                  onChange={this.onInputChange('standardsClause')}
                />
              )}

              <Typography variant="title" className="risk-assessment">
                Risk Assessment
              </Typography>

              <Grid container>
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
                    {severities.map(item => (
                      <MenuItem key={item} value={item}>
                        {item}
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
          </CardContent>
        </Card>
        <input
          type="file"
          accept="image/*"
          // capture="environment"
          style={{ display: 'none' }}
          ref={input => {
            this.fileInput = input
          }}
          onChange={this.getFile}
        />
      </StyledAddCompliaceIssue>
    )
  }
}

AddComplianceIssue.contextTypes = {
  setNavTitle: PropTypes.func,
  removeNavTitle: PropTypes.func,
  setLeftNavComponent: PropTypes.func,
  removeLefNavComponent: PropTypes.func,
}
