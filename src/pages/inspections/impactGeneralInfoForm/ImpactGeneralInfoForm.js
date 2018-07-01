import React, { Component } from 'react'
import CircularProgress from '@material-ui/core/CircularProgress'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import { withFeedback } from '../../../hocs/withFeedback/withFeedback'
import { onEventInputChange } from '../../../functions/onEventInputChange'
import { StyledImpactGeneralInfoForm } from './StyledImpactGeneralInfoForm'

export class ImpactGeneralInfoFormWithout extends Component {
  state = { temperature: '', humidity: '', rain: '', apparatus: '' }

  componentDidMount() {
    const { initialData } = this.props

    this.loadInitialData(initialData)
  }

  componentWillReceiveProps({ initialData }) {
    if (initialData && initialData !== this.props.initialData) {
      this.loadInitialData(initialData)
    }
  }

  loadInitialData = initialData => {
    this.setState({ ...initialData })
  }

  onEventInputChange = onEventInputChange

  submit = async () => {
    const { temperature, humidity, rain, apparatus } = this.state
    const { setFeedback, onSubmit, afterSubmit } = this.props

    if (temperature && humidity && rain && apparatus) {
      setFeedback({ error: '', loading: true })

      try {
        await onSubmit({
          temperature,
          humidity,
          rain,
          apparatus,
        })
        setFeedback({ loading: false })
        afterSubmit && afterSubmit()
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
                onClick={this.submit}
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
