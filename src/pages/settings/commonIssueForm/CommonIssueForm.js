import React, { Component } from 'react'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Button from '@material-ui/core/Button'
import CircularProgress from '@material-ui/core/CircularProgress'
import TextField from '@material-ui/core/TextField'
import InputLabel from '@material-ui/core/InputLabel'
import MenuItem from '@material-ui/core/MenuItem'
import Grid from '@material-ui/core/Grid'
import {
  onComponentDidMountLoadData,
  onComponentWillReceivePropsLoadData,
  onEventInputChange,
} from '../../../functions/'
import { probabilities, severities, riskLevels } from '../../../constants/'
import { StyledCommonIssueForm } from './StyledCommonIssueForm'
import { state } from './state'
import { submit } from './submit'

export class CommonIssueForm extends Component {
  state = state

  componentDidMount() {
    onComponentDidMountLoadData(this)
  }

  componentWillReceiveProps(nextProps) {
    onComponentWillReceivePropsLoadData(this, nextProps)
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
        <Card className="card">
          <CardContent>
            <form noValidate>
              <TextField
                fullWidth
                label="Issue"
                value={issue}
                onChange={onEventInputChange(this, 'issue')}
                margin="normal"
              />

              <TextField
                fullWidth
                label="Category"
                value={category}
                onChange={onEventInputChange(this, 'category')}
                margin="normal"
              />

              <TextField
                fullWidth
                label="Finding"
                value={finding}
                onChange={onEventInputChange(this, 'finding')}
                margin="normal"
              />

              <TextField
                fullWidth
                label="Standards Clause"
                value={standardsClause}
                onChange={onEventInputChange(this, 'standardsClause')}
                margin="normal"
              />

              <TextField
                fullWidth
                label="Implementation Date"
                value={implementationDate}
                onChange={onEventInputChange(this, 'implementationDate')}
                margin="normal"
              />

              <TextField
                fullWidth
                multiline
                label="Pre-implementation Text"
                value={preImplementationText}
                margin="normal"
                onChange={onEventInputChange(this, 'preImplementationText')}
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
                    onChange={onEventInputChange(this, 'probability')}
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
                    onChange={onEventInputChange(this, 'severity')}
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
                onChange={onEventInputChange(this, 'comments')}
              />

              <TextField
                fullWidth
                multiline
                label="Recommendations"
                value={recommendations}
                margin="normal"
                onChange={onEventInputChange(this, 'recommendations')}
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
                onClick={submit(this)}
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
