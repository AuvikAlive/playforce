import React, { Component } from 'react'
import CircularProgress from '@material-ui/core/CircularProgress'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import { withFeedback } from '../../../hocs/withFeedback/withFeedback'
import { onEventInputChange } from '../../../functions/'
import { StyledImpactGeneralInfoForm } from './StyledImpactGeneralInfoForm'
import {
  onComponentDidMount,
  onComponentWillReceiveProps,
  submit,
} from './functions/'

export class ImpactGeneralInfoFormWithout extends Component {
  state = { temperature: '', humidity: '', rain: '', apparatus: '' }

  componentDidMount() {
    onComponentDidMount(this)
  }

  componentWillReceiveProps(nextProps) {
    onComponentWillReceiveProps(this, nextProps)
  }

  onEventInputChange = onEventInputChange

  render() {
    const { temperature, humidity, rain, apparatus } = this.state
    const { buttonText, error, loading } = this.props

    return (
      <StyledImpactGeneralInfoForm className="StyledImpactGeneralInfoForm">
        <Card className="card">
          <CardContent>
            <form noValidate>
              <TextField
                fullWidth
                margin="normal"
                label="Temperature (°C)"
                value={temperature}
                onChange={this.onEventInputChange('temperature')}
              />

              <TextField
                fullWidth
                margin="normal"
                label="Humidity (%)"
                value={humidity}
                onChange={this.onEventInputChange('humidity')}
              />

              <TextField
                fullWidth
                margin="normal"
                label="Comment on rain"
                value={rain}
                onChange={this.onEventInputChange('rain')}
              />

              <TextField
                fullWidth
                margin="normal"
                label="Test apparatus"
                value={apparatus}
                onChange={this.onEventInputChange('apparatus')}
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
      </StyledImpactGeneralInfoForm>
    )
  }
}

export const ImpactGeneralInfoForm = withFeedback(ImpactGeneralInfoFormWithout)
