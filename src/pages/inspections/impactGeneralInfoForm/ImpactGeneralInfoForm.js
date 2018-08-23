import React, { Component } from 'react'
import CircularProgress from '@material-ui/core/CircularProgress'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import { withFeedback } from '../../../hocs/withFeedback/withFeedback'
import {
  onComponentDidMountLoadData,
  onComponentWillReceivePropsLoadData,
  onEventInputChange,
} from '../../../functions/'
import { StyledImpactGeneralInfoForm } from './StyledImpactGeneralInfoForm'
import { state } from './state'
import { submit } from './submit'

export class ImpactGeneralInfoFormWithout extends Component {
  state = state

  componentDidMount() {
    onComponentDidMountLoadData(this)
  }

  componentWillReceiveProps(nextProps) {
    onComponentWillReceivePropsLoadData(this, nextProps)
  }

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
                onChange={onEventInputChange(this, 'temperature')}
              />

              <TextField
                fullWidth
                margin="normal"
                label="Humidity (%)"
                value={humidity}
                onChange={onEventInputChange(this, 'humidity')}
              />

              <TextField
                fullWidth
                margin="normal"
                label="Comment on rain"
                value={rain}
                onChange={onEventInputChange(this, 'rain')}
              />

              <TextField
                fullWidth
                margin="normal"
                label="Test apparatus"
                value={apparatus}
                onChange={onEventInputChange(this, 'apparatus')}
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
