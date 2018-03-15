import React, { Component } from 'react'
import PropTypes from 'prop-types'
import IconButton from 'material-ui/IconButton'
import ArrowBackIcon from 'material-ui-icons/ArrowBack'
import Card, { CardContent } from 'material-ui/Card'
import Button from 'material-ui/Button'
import { CircularProgress } from 'material-ui/Progress'
import TextField from 'material-ui/TextField'
import { MenuItem } from 'material-ui/Menu'
import Typography from 'material-ui/Typography'
import { StyledAddCommonIssue } from './StyledAddCommonIssue'

const standards = ['Standard 1', 'Standard 2', 'Standard 3']
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

export class AddCommonIssue extends Component {
  state = {
    appliedStandards: [],
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

  publish = () => {
    console.log(this.state)
  }

  render() {
    const {
      finding,
      appliedStandards,
      probability,
      severity,
      comments,
      recommendations,
      error,
      loading,
    } = this.state

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
                select
                label="Applied Standards"
                value={appliedStandards}
                SelectProps={{
                  multiple: true,
                }}
                onChange={this.onInputChange('appliedStandards')}
                margin="normal"
              >
                {standards.map(item => (
                  <MenuItem key={item} value={item}>
                    {item}
                  </MenuItem>
                ))}
              </TextField>

              <Typography variant="title" className="risk-assessment">
                Risk Assessment
              </Typography>

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

              <TextField
                fullWidth
                disabled
                label="Risk Level"
                value={riskLevel}
                margin="normal"
              />

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
